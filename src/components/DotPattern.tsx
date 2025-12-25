export function DotPattern() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full fill-gray-200/40 [mask-image:radial-gradient(white,transparent_80%)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke="none" fill="url(#dot-pattern)"></rect>
    </svg>
  );
}
