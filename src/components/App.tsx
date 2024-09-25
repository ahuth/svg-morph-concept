export default function App() {
  return (
    <div className="p-8">
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        {/* prettier-ignore */}
        <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="2" fill="tan" />

        {/* Body */}
        {/* prettier-ignore */}
        <rect x="90" y="70" width="20" height="60" stroke="black" strokeWidth="2" fill="blue" />

        {/* Left arm */}
        {/* prettier-ignore */}
        <line x1="90" y1="80" x2="50" y2="120" stroke="black" strokeWidth="4" />

        {/* Right arm */}
        {/* prettier-ignore */}
        <line x1="110" y1="80" x2="150" y2="120" stroke="black" strokeWidth="4" />

        {/* Left leg */}
        {/* prettier-ignore */}
        <line x1="90" y1="130" x2="70" y2="190" stroke="black" strokeWidth="4" />

        {/* Right leg */}
        {/* prettier-ignore */}
        <line x1="110" y1="130" x2="130" y2="190" stroke="black" strokeWidth="4" />
      </svg>
    </div>
  );
}
