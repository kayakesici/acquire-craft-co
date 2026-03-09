import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/kayakesici-6v8c/30min";

const Footer = () => (
  <footer className="border-t border-border bg-primary px-6 py-5">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
      <a
        href="mailto:dealflow@acquisitionteam.co.uk"
        className="text-sm text-primary-foreground/80 underline underline-offset-4 transition-colors hover:text-primary-foreground"
      >
        dealflow@acquisitionteam.co.uk
      </a>

      <p className="max-w-xl text-xs leading-relaxed text-primary-foreground/50 sm:text-center">
        Transaction support &amp; advisory. Not regulated investment advice. Financing introductions on an introductory basis only.
      </p>

      <div className="flex items-center gap-3 text-xs text-primary-foreground/40">
        <Link to="/privacy" className="transition-colors hover:text-primary-foreground/70">Privacy</Link>
        <span>|</span>
        <Link to="/terms" className="transition-colors hover:text-primary-foreground/70">Terms</Link>
        <span>|</span>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground/70">Schedule Call</a>
      </div>
    </div>
  </footer>
);

export default Footer;
