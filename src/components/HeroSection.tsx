import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-primary px-6 py-24 md:py-36">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
        The Acquisition Team
      </h1>
      <p className="mb-4 text-lg font-light text-primary-foreground/80 md:text-xl">
        Fractional Buy-Side M&A Execution for UK Business Buyers
      </p>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        We source, screen, model, and execute acquisitions for serious SME buyers — with disciplined process from origination through to completion.
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
    </div>
  </section>
);

export default HeroSection;
