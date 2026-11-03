import type {ReactNode} from 'react';

export default function InstagramIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="17"
      style={{verticalAlign: '-3px'}}
      viewBox="0 0 24 24"
      width="17"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8">
      <rect height="18" rx="5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}
