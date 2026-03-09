import { Button } from "@/components/ui/button";

const MAILTO_URL = "mailto:dealflow@acquisition.co.uk?subject=Confidential%20Acquisition%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20acquisition%20opportunities.";

const HeroSection = () => (
  <section className="relative bg-primary px-6 py-16 md:py-20">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/40">
        Buy-Side M&amp;A Advisory &nbsp;·&nbsp; UK SME Acquisitions
      </p>
      <h1 className="mb-7 text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
        We help business owners find and complete bolt-on acquisitions.
      </h1>
      <p className="mx-auto mb-5 max-w-[680px] text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        We work as your outsourced acquisition team, sourcing deals, running the numbers and managing the process through to successful completion.
      </p>
      <p className="mx-auto mb-10 max-w-[680px] text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
        For owner-operators and investors actively acquiring UK businesses.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          asChild
        >
          <a href={MAILTO_URL}>
            Book a Confidential Call
          </a>
        </Button>
        <a
          href="#process"
          className="text-sm text-primary-foreground/70 underline underline-offset-4 transition-colors hover:text-primary-foreground"
        >
          View Our Process
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
