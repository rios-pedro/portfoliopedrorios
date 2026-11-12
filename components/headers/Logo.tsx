export default function Logo() {
  return (
    <div
      className="logo loading__fade fade-in"
      data-duration="1.2"
      data-delay="300"
    >
      <a href="#home" className="logo__link" aria-label="Pedro Rios, início">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <path
            className="mxd-background"
            d="M33.4,50H16.7C7.5,50,0,42.5,0,33.3V16.7C0,7.5,7.5,0,16.7,0h16.7C42.5,0,50,7.5,50,16.7v16.7C50,42.5,42.5,50,33.4,50z"
          />
          <text
            className="mxd-cat"
            x="25"
            y="31"
            textAnchor="middle"
            fontFamily="var(--font-mono), monospace"
            fontSize="17"
            fontWeight="500"
          >
            PR
          </text>
        </svg>
        <span className="logo-text">Pedro Rios</span>
      </a>
    </div>
  );
}
