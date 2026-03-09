import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-primary px-6 py-20 md:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/40">
        Buy-Side M&amp;A Advisory &nbsp;·&nbsp; UK SME Acquisitions
      </p>
      <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
        Outsourced acquisition execution for UK SME deal origination, underwriting and completion.
      </h1>
      <p className="mx-auto mb-10 max-w-[720px] text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        We build and manage your deal origination pipeline, underwrite opportunities with institutional modelling discipline, and execute transactions through to completion.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book a Confidential Call
        </Button>
        <a
          href="#process"
          className="text-sm text-primary-foreground/70 underline underline-offset-4 transition-colors hover:text-primary-foreground"
        >
          View Our Process
        </a>
      </div>
      <p className="mt-8 text-xs tracking-wide text-primary-foreground/30">
        Deal origination &nbsp;·&nbsp; Financial underwriting &nbsp;·&nbsp; Transaction execution
      </p>
    </div>
  </section>
);

export default HeroSection;
