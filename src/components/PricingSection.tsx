import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Search Engine",
    price: "£1,500 / month retainer",
    features: [
      "Weekly shortlist of screened opportunities",
      "Direct outreach to owners + broker filtering",
      "Structured pipeline and prioritisation",
      "Cancel anytime (30-day notice)",
    ],
    cta: "Start a Search Sprint",
  },
  {
    title: "Execute One Deal",
    price: "£4,000 upfront + 3% success fee",
    features: [
      "Clean valuation model + downside protection",
      "Indicative structure + Heads of Terms support",
      "Diligence coordination + lender introductions",
      "Execution support through to completion",
    ],
    cta: "Discuss a Live Deal",
  },
];

const PricingSection = () => (
  <section id="pricing" className="bg-muted px-6 py-20 md:py-28">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-14 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Engagement Options
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {packages.map((pkg) => (
          <div key={pkg.title} className="flex flex-col rounded border border-border bg-card p-8">
            <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
              {pkg.title}
            </h3>
            <p className="mb-6 text-sm font-medium text-accent">{pkg.price}</p>
            <ul className="mb-8 flex-1 space-y-3">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {pkg.cta}
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Partner/equity-based involvement available for exceptional opportunities.
      </p>
    </div>
  </section>
);

export default PricingSection;
