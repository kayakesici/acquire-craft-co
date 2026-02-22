import { Button } from "@/components/ui/button";

const UNDERWRITE_URL = "https://example.com/underwrite"; // TODO: Replace with actual Base44 Underwrite app URL

const services = [
  {
    name: "7-Day Acquisition Underwrite",
    description: "Independent financial clarity before you commit.",
    timeline: "7 working days",
    price: "Under £1.5m EV — £3,000 | £1.5m–£3m — £4,000 | £3m–£5m — £5,000 | £5m+ — Custom",
    cta: "Start Underwrite",
    action: "underwrite" as const,
  },
  {
    name: "Quick Deal Review",
    description: "Fast buyer-aligned view on one live deal.",
    timeline: "48–72 hours",
    price: "£750–£1,250",
    cta: "Request",
    action: "contact" as const,
  },
  {
    name: "Target Universe Build",
    description: "Clean target list with filters and prioritisation.",
    timeline: "5–10 days",
    price: "£1,500–£3,000",
    cta: "Request",
    action: "contact" as const,
  },
  {
    name: "Off-Market Origination Sprint",
    description: "Owner outreach + broker filtering + shortlist.",
    timeline: "30 days",
    price: "£1,500 / month",
    cta: "Request",
    action: "contact" as const,
  },
  {
    name: "Acquisition Model Build",
    description: "Clean model, downside case, valuation range.",
    timeline: "5–7 days",
    price: "£2,000–£4,000",
    cta: "Request",
    action: "contact" as const,
  },
  {
    name: "Heads of Terms Support",
    description: "Structure and negotiation support.",
    timeline: "3–5 days",
    price: "£1,500–£3,000",
    cta: "Request",
    action: "contact" as const,
  },
  {
    name: "Execution Support",
    description: "Process management through diligence to close.",
    timeline: "4–8 weeks",
    price: "£6k–£12k or agreed structure",
    cta: "Request",
    action: "contact" as const,
  },
];

const PricingSection = () => (
  <section id="services" className="bg-muted px-6 py-20 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-14 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Services
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.name} className="flex flex-col rounded border border-border bg-card p-7">
            <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-lg font-semibold text-card-foreground">
              {s.name}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            <div className="mb-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/70">Timeline:</span> {s.timeline}
            </div>
            <div className="mb-6 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/70">Price:</span> {s.price}
            </div>
            <div className="mt-auto">
              {s.action === "underwrite" ? (
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open(UNDERWRITE_URL, "_blank", "noopener")}
                >
                  {s.cta}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {s.cta}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
