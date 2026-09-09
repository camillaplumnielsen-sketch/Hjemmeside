import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/lib/site';

/**
 * Modtager leads fra kontaktformular og lead magnet, og sender dem videre
 * som e-mail til virksomheden via Resend (https://resend.com).
 *
 * Kræver miljøvariablen RESEND_API_KEY i Vercel. Uden den logges leadet
 * blot server-side, så resten af flowet stadig virker.
 */

type LeadPayload = {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  projectType?: string;
  message?: string;
  size?: number;
  estimate?: { min: number; max: number };
  bookInspection?: boolean;
  attachments?: string[];
};

function isValidEmail(email?: string): boolean {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function buildEmailHtml(lead: LeadPayload & { receivedAt: string }): string {
  const rows: [string, string | undefined][] = [
    ['Kilde', lead.source],
    ['Navn', lead.name],
    ['Telefon', lead.phone],
    ['E-mail', lead.email],
    ['Adresse', lead.address],
    ['Ydelse', lead.service ?? lead.projectType],
    ['Ønsker besigtigelse', lead.bookInspection === undefined ? undefined : lead.bookInspection ? 'Ja' : 'Nej'],
    ['Vedhæftede filnavne', lead.attachments && lead.attachments.length > 0 ? lead.attachments.join(', ') : undefined],
  ];

  const rowsHtml = rows
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#5b6b60;white-space:nowrap;">${label}</td><td style="padding:4px 0;font-weight:600;color:#132e22;">${escapeHtml(String(value))}</td></tr>`)
    .join('');

  const messageHtml = lead.message
    ? `<p style="margin-top:16px;white-space:pre-wrap;color:#132e22;"><strong>Besked:</strong><br>${escapeHtml(lead.message)}</p>`
    : '';

  return `
    <div style="font-family:Arial,sans-serif;max-width:520px;">
      <h2 style="color:#132e22;">Ny henvendelse fra hjemmesiden</h2>
      <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
      ${messageHtml}
      <p style="margin-top:20px;font-size:12px;color:#9aa39c;">Modtaget ${new Date(lead.receivedAt).toLocaleString('da-DK')}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Ugyldig anmodning' }, { status: 400 });
  }

  // Minimal validering: der skal være en kontaktmulighed
  const hasContact = isValidEmail(data.email) || (data.phone && data.phone.replace(/\D/g, '').length >= 6);
  if (!hasContact) {
    return NextResponse.json(
      { ok: false, error: 'Angiv venligst telefon eller en gyldig e-mail.' },
      { status: 422 },
    );
  }

  const lead = {
    ...data,
    receivedAt: new Date().toISOString(),
  };

  console.info('[lead] ny henvendelse:', {
    source: lead.source,
    service: lead.service ?? lead.projectType,
    hasPhone: Boolean(lead.phone),
    hasEmail: isValidEmail(lead.email),
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const fromAddress = process.env.RESEND_FROM_EMAIL ?? 'Tømrerfirmaet Brdr. Larsen <onboarding@resend.dev>';
      const result = await resend.emails.send({
        from: fromAddress,
        to: site.email,
        replyTo: isValidEmail(lead.email) ? lead.email : undefined,
        subject: `Ny henvendelse fra hjemmesiden${lead.name ? ` – ${lead.name}` : ''}`,
        html: buildEmailHtml(lead),
      });
      // Resends SDK kaster ikke en exception ved API-fejl (fx sandbox-begrænsninger) –
      // fejlen kommer i stedet tilbage i result.error, så den skal tjekkes eksplicit.
      if (result.error) {
        console.error('[lead] Resend afviste e-mailen:', result.error);
      } else {
        console.info('[lead] e-mail sendt via Resend, id:', result.data?.id);
      }
    } catch (err) {
      // Leadet er allerede logget ovenfor, så det går ikke tabt – men mailen kunne ikke sendes.
      console.error('[lead] kunne ikke sende e-mail via Resend:', err);
    }
  } else {
    console.warn('[lead] RESEND_API_KEY er ikke sat – der sendes ikke e-mail for denne henvendelse.');
  }

  return NextResponse.json({ ok: true, message: 'Tak – vi vender tilbage hurtigst muligt.' });
}
