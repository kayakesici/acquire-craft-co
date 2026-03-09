import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-muted/70 px-6 py-6 text-center">
    <a
      href="mailto:dealflow@acquisitionteam.co.uk"
      className="text-[15px] text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
    >
      dealflow@acquisitionteam.co.uk
    </a>

    <div className="mt-2.5 flex items-center justify-center gap-3 text-[12px] text-muted-foreground">
      <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
      <span>|</span>
      <Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link>
    </div>

    <p className="mt-2.5 text-[10px] text-muted-foreground/60">
      © 2025 The Acquisition Team. All rights reserved.
    </p>
  </footer>
);

export default Footer;
