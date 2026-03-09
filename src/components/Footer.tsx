import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/kayakesici-6v8c/30min";

const Footer = () => (
  <footer className="bg-muted px-6 pt-0 pb-6">
    {/* Divider */}
    <div className="mx-auto max-w-5xl border-t border-border" />

    {/* 3-column grid */}
    <div className="mx-auto max-w-5xl pt-10 grid gap-10 text-sm md:grid-cols-3">
      {/* Col 1 – Brand */}
      <div>
        <p className="font-bold text-foreground">The Acquisition Team</p>
        <p className="mt-2 leading-[1.6] text-muted-foreground text-[13px]">
          Outsourced acquisition execution for UK SME buyers pursuing bolt-on growth.
        </p>
      </div>

      {/* Col 2 – Navigation */}
      <div>
        <p className="mb-2 font-semibold text-foreground text-[13px]">Navigation</p>
        <ul className="space-y-1.5 text-[13px] text-muted-foreground">
          <li><a href="#capabilities" className="transition-colors hover:text-foreground">Services</a></li>
          <li><a href="#process" className="transition-colors hover:text-foreground">Process</a></li>
          <li><a href="#why-us" className="transition-colors hover:text-foreground">Why Us</a></li>
          <li><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></li>
        </ul>
      </div>

      {/* Col 3 – Legal / utility */}
      <div>
        <p className="mb-2 font-semibold text-foreground text-[13px]">Legal</p>
        <ul className="space-y-1.5 text-[13px] text-muted-foreground">
          <li><Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link></li>
          <li><Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link></li>
          <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Schedule Call</a></li>
          <li><a href="mailto:dealflow@acquisitionteam.co.uk" className="transition-colors hover:text-foreground">dealflow@acquisitionteam.co.uk</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom strip */}
    <div className="mx-auto max-w-5xl mt-10 border-t border-border pt-5 text-center text-[11px] text-muted-foreground">
      © 2025 The Acquisition Team. All rights reserved.
    </div>
  </footer>
);

export default Footer;
