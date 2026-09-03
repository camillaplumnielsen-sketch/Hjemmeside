type IconKey = 'roof' | 'renovation' | 'extension' | 'window' | 'carport' | 'special';

const paths: Record<IconKey, React.ReactNode> = {
  roof: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  renovation: (
    <>
      <path d="m14.5 5.5 4 4" />
      <path d="M3 21v-3.5L14 6.5l3.5 3.5L6.5 21z" />
      <path d="M15 4.5 17.5 2 22 6.5 19.5 9" />
    </>
  ),
  extension: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V9l5-4 5 4" />
      <path d="M15 21V11h4v10" />
      <path d="M8.5 21v-4h3v4" />
    </>
  ),
  window: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M4 12h16" />
    </>
  ),
  carport: (
    <>
      <path d="M3 10 12 5l9 5" />
      <path d="M5 10v10M19 10v10" />
      <path d="M3 20h18" />
      <path d="M8 20v-5h8v5" />
    </>
  ),
  special: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = 'h-6 w-6',
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
