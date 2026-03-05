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
        <a href="#" className="transition-colors hover:text-primary-foreground/70">Privacy</a>
        <span>|</span>
        <a href="#" className="transition-colors hover:text-primary-foreground/70">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
