import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/kayakesici-6v8c/30min";

const ContactSection = () => (
  <section id="contact" className="bg-primary px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl text-center">
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
        Book a Confidential Call
      </h2>
      <p className="mx-auto mb-10 max-w-[720px] text-sm leading-relaxed text-primary-foreground/60 md:text-base">
        If you are actively acquiring UK businesses, we can operate as your buy-side execution team — running the process while you run your business.
      </p>
      <Button
        size="lg"
        className="mb-12 bg-accent text-accent-foreground hover:bg-accent/90"
        asChild
      >
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          Schedule a Call
        </a>
      </Button>

      {/* Calendly Embed */}
      <div className="mx-auto max-w-[780px] overflow-hidden rounded-lg border border-primary-foreground/10 bg-background p-2 shadow-lg">
        <iframe
          src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff`}
          width="100%"
          height="780"
          frameBorder="0"
          scrolling="no"
          title="Schedule a call with The Acquisition Team"
          className="rounded"
        />
      </div>

      <p className="mt-8 text-xs text-primary-foreground/30">All conversations are confidential.</p>
    </div>
  </section>
);

export default ContactSection;
