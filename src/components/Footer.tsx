import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/kayakesici-6v8c/30min";

const Footer = () => (
  <footer className="bg-primary px-6 pb-8 pt-0">
    {/* Separator */}
    <div className="mx-auto mb-8 max-w-[640px] border-t border-primary-foreground/10" />

    {/* Zone 1 – Contact & Disclaimer */}
    <div className="mx-auto max-w-[640px] text-center">
      <a
        href="mailto:dealflow@acquisitionteam.co.uk"
        className="text-[13px] font-medium text-primary-foreground/75 underline underline-offset-4 transition-colors hover:text-primary-foreground"
      >
        dealflow@acquisitionteam.co.uk
      </a>
      <p className="mt-3 max-w-xl mx-auto text-[10px] leading-relaxed text-primary-foreground/35">
        Transaction support &amp; advisory. Not regulated investment advice. Financing introductions provided on an introductory basis only.
      </p>

      {/* Zone 2 – Navigation */}
      <div className="mt-5 flex items-center justify-center gap-3 text-[11px] text-primary-foreground/35">
        <Link to="/privacy" className="transition-colors hover:text-primary-foreground/60">Privacy</Link>
        <span>|</span>
        <Link to="/terms" className="transition-colors hover:text-primary-foreground/60">Terms</Link>
        <span>|</span>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground/60">Schedule Call</a>
      </div>
    </div>
  </footer>
);

export default Footer;
