export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" fill="currentColor" />
      <path d="M6.5 11v4.6c0 1.2 2.8 2.4 5.5 2.4s5.5-1.2 5.5-2.4V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 9.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
