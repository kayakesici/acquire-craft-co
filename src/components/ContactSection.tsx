import { Button } from "@/components/ui/button";

const MAILTO_URL = "mailto:dealflow@acquisition.co.uk?subject=Confidential%20Acquisition%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20acquisition%20opportunities.";

const ContactSection = () => (
  <section id="contact" className="bg-background px-6 pt-10 pb-8">
    <div className="mx-auto max-w-[640px] text-center">
      <h2 className="mb-3 text-[2rem] font-bold tracking-tight text-foreground md:text-[2.5rem]">
        Book a Confidential Call
      </h2>
      <p className="mx-auto mb-6 max-w-[520px] text-sm leading-[1.6] text-muted-foreground md:text-base">
        If you are actively looking to acquire UK businesses, let's talk about your criteria and how we can help.
      </p>
      <Button
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/75 rounded-md px-8 py-3.5 text-base"
        asChild
      >
        <a href={MAILTO_URL}>
          Book a Confidential Call
        </a>
      </Button>
    </div>
  </section>
);

export default ContactSection;
