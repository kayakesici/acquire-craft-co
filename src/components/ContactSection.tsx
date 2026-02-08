import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Book a Confidential Strategy Call
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
        If you are actively looking to acquire a UK business, we can operate as your fractional buy-side execution team.
      </p>
      <Button
        size="lg"
        className="mb-10 bg-accent text-accent-foreground hover:bg-accent/90"
      >
        Schedule a Call
      </Button>

      {/* Calendly placeholder */}
      <div className="mx-auto flex h-64 max-w-lg items-center justify-center rounded border border-dashed border-border bg-muted">
        <span className="text-sm text-muted-foreground">[Calendly Embed Placeholder]</span>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">All conversations are confidential.</p>
    </div>
  </section>
);

export default ContactSection;
