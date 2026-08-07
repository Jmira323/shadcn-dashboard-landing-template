import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

/**
 * Nova Analytics mark: violet→aqua gradient tile with a four-point star.
 * Scales via the `size` prop; gradient id is namespaced per instance so
 * multiple logos can render on one page.
 */
export function Logo({ size = 24, className, ...props }: LogoProps) {
  const gradientId = React.useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nova Analytics"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
      <path
        d="M32 10 C33.5 22, 43 31.5, 55 33 C43 34.5, 33.5 44, 32 56 C30.5 44, 21 34.5, 9 33 C21 31.5, 30.5 22, 32 10 Z"
        fill="#FFFFFF"
      />
      <path
        d="M49 9 C49.6 13, 51 14.4, 55 15 C51 15.6, 49.6 17, 49 21 C48.4 17, 47 15.6, 43 15 C47 14.4, 48.4 13, 49 9 Z"
        fill="#FFFFFF"
        fillOpacity="0.92"
      />
    </svg>
  )
}
