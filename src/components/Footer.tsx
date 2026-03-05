const Footer = () => (
  <footer className="border-t border-border bg-primary px-6 py-8 md:py-10">
    <div className="mx-auto max-w-4xl text-center">
      <a
        href="mailto:dealflow@acquisitionteam.co.uk"
        className="text-sm text-primary-foreground/80 underline underline-offset-4 transition-colors hover:text-primary-foreground"
      >
        dealflow@acquisitionteam.co.uk
      </a>

      <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-primary-foreground/50">
        The Acquisition Team provides transaction support and advisory services. We do not provide regulated investment advice. Financing introductions are provided on an introductory basis only. Engagement terms agreed in writing.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-primary-foreground/40">
        <a href="#" className="transition-colors hover:text-primary-foreground/70">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="transition-colors hover:text-primary-foreground/70">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
