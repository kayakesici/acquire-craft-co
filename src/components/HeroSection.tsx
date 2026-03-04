import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-primary px-6 py-24 md:py-36">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/40">
        Private Capital. Disciplined Execution.
      </p>
      <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
        Your fractional acquisition team for sourcing, structuring and executing UK SME acquisitions.
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        We build and run a disciplined acquisition pipeline inside your business — sourcing targets, screening opportunities, modelling deals and supporting execution through completion.
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
        200+ vendor calls &nbsp;|&nbsp; Institutional modelling discipline &nbsp;|&nbsp; UK SME acquisitions
      </p>
    </div>
  </section>
);

export default HeroSection;
