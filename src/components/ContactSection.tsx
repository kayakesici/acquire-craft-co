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
    <section id="contact" className="bg-background px-6 py-10">
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="mb-3 text-[2rem] font-bold tracking-tight text-foreground md:text-[2.5rem]">
          Book a Confidential Call
        </h2>
        <p className="mx-auto mb-6 max-w-[520px] text-sm leading-[1.6] text-muted-foreground md:text-base">
          If you are actively acquiring UK businesses, we can discuss your
          acquisition criteria, pipeline and where we may be able to support.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/75 rounded-md px-8 py-3.5 text-base"
          onClick={handleBookCall}
        >
          Book a Confidential Call
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
