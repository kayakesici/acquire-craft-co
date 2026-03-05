import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="bg-primary px-6 py-16 md:py-24">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
        Book a Confidential Call
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        If you are actively acquiring UK businesses, we can operate as your buy-side execution team — running the process while you run your business.
      </p>
      <Button
        size="lg"
        className="mb-12 bg-accent text-accent-foreground hover:bg-accent/90"
      >
        Schedule a Call
      </Button>

      {/* Calendly placeholder */}
      <div className="mx-auto flex h-64 max-w-lg items-center justify-center rounded border border-dashed border-primary-foreground/20 bg-primary-foreground/5">
        <span className="text-sm text-primary-foreground/40">[Calendly Embed Placeholder]</span>
      </div>

      <p className="mt-8 text-xs text-primary-foreground/30">All conversations are confidential.</p>
    </div>
  </section>
);

export default ContactSection;
