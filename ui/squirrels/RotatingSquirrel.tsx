"use client";

type RotatingSquirrelProps = {
  className?: string;
  size?: number;
};

export function RotatingSquirrel({
  className,
  size = 120,
}: RotatingSquirrelProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={{
        animation:
          "squirrel-wobble 3s ease-in-out infinite, squirrel-bounce 2s ease-in-out infinite",
        color: "var(--color-amber-700)",
      }}
    >
      <style>
        {`
          @keyframes squirrel-wobble {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          @keyframes squirrel-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
      {/* Fluffy tail */}
      <path
        fill="currentColor"
        d="M78 20c8-4 16 2 18 10 2 10-2 18-8 24-4 4-8 6-10 6 2-8 4-18 2-26-1-6-2-10-2-14z"
      />
      <ellipse cx="88" cy="18" rx="8" ry="10" fill="currentColor" />
      <ellipse cx="92" cy="30" rx="6" ry="8" fill="currentColor" />
      <ellipse cx="88" cy="42" rx="5" ry="6" fill="currentColor" />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="22" ry="18" fill="currentColor" />
      {/* Head */}
      <circle cx="32" cy="38" r="16" fill="currentColor" />
      {/* Ears */}
      <ellipse cx="22" cy="24" rx="5" ry="7" fill="currentColor" />
      <ellipse cx="38" cy="22" rx="5" ry="7" fill="currentColor" />
      {/* Inner ears */}
      <ellipse cx="22" cy="24" rx="3" ry="4" fill="currentColor" opacity="0.6" />
      <ellipse cx="38" cy="22" rx="3" ry="4" fill="currentColor" opacity="0.6" />
      {/* Eye */}
      <circle cx="26" cy="36" r="4" fill="white" />
      <circle cx="27" cy="35" r="2" fill="#1a1a1a" />
      {/* Nose */}
      <ellipse cx="18" cy="42" rx="3" ry="2" fill="#1a1a1a" />
      {/* Front legs holding acorn */}
      <ellipse cx="30" cy="62" rx="4" ry="8" fill="currentColor" />
      <ellipse cx="38" cy="62" rx="4" ry="8" fill="currentColor" />
      {/* Acorn */}
      <ellipse cx="34" cy="72" rx="6" ry="5" fill="#C4A66B" />
      <path d="M28 68 Q34 64 40 68 L40 70 Q34 67 28 70 Z" fill="#8B6914" />
      {/* Back leg */}
      <ellipse cx="62" cy="68" rx="8" ry="6" fill="currentColor" />
      {/* Tiny foot */}
      <ellipse cx="68" cy="72" rx="4" ry="2" fill="currentColor" />
    </svg>
  );
}
