import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-primary px-6 py-24 md:py-36">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
        Your Fractional Acquisition Team
      </p>
      <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
        We help busy business owners find and acquire profitable bolt-on businesses.
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        We embed into your back office as a virtual buy-side team — running structured deal sourcing, screening, modelling, and execution so you can focus on running your business.
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
