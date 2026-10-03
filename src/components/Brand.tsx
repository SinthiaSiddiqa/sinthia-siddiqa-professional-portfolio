import brandLogo from "../assets/sinthia-logo.jpg";

export default function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Sinthia Siddiqa home">
      <span className="brand-mark">
        <img
          src={brandLogo}
          alt="Sinthia Siddiqa logo"
          className="brand-logo"
        />
      </span>

      <span className="brand-name">
        Sinthia Siddiqa
      </span>
    </a>
  );
}