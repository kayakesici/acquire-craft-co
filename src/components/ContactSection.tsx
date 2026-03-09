import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/kayakesici-6v8c/30min";

const ContactSection = () => {
  const handleBookCall = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-primary to-[hsl(222,47%,9%)] px-6 py-[60px] pb-[70px]">
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="mb-3.5 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Book a Confidential Call
        </h2>
        <p className="mx-auto mb-6 max-w-[560px] text-sm leading-[1.6] text-primary-foreground/60 md:text-base">
          If you are actively acquiring UK businesses, we can discuss your acquisition criteria, pipeline and where we may be able to support.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-md px-7 py-3.5 text-base"
          onClick={handleBookCall}
        >
          Book a Confidential Call
        </Button>
        <p className="mt-3 text-xs text-primary-foreground/30">
          All conversations are confidential.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
