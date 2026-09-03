import { NextResponse } from 'next/server';

/**
 * Modtager leads fra tilbudsberegner, kontaktformular og lead magnet.
 *
 * I produktion kobles dette til fx e-mail (Resend/SMTP), et CRM eller Supabase.
 * Lige nu valideres og logges leadet server-side, og der returneres en kvittering,
 * så hele frontend-flowet virker end-to-end.
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

  // TODO(produktion): send notifikation til LEAD_NOTIFICATION_EMAIL og/eller gem i CRM/Supabase.
  // Undgå at logge følsomme data i produktion – her er det bevidst simpelt til demo.
  console.info('[lead] ny henvendelse:', {
    source: lead.source,
    service: lead.service ?? lead.projectType,
    hasPhone: Boolean(lead.phone),
    hasEmail: isValidEmail(lead.email),
  });

  return NextResponse.json({ ok: true, message: 'Tak – vi vender tilbage hurtigst muligt.' });
}
