import { Briefcase, Search, BarChart3, FileText } from "lucide-react";

const capabilities = [
  {
    icon: Briefcase,
    title: "Buy-Side Acquisition Execution",
    desc: "End-to-end management of the acquisition process from mandate through to completion on behalf of the buyer.",
  },
  {
    icon: Search,
    title: "Deal Origination & Pipeline Development",
    desc: "Systematic sourcing of proprietary and intermediated opportunities aligned to defined acquisition criteria.",
  },
  {
    icon: BarChart3,
    title: "Financial Underwriting & Valuation",
    desc: "Institutional-grade financial analysis including normalised EBITDA, valuation scenarios and debt service modelling.",
  },
  {
    icon: FileText,
    title: "Transaction Structuring & Negotiation",
    desc: "Deal structuring, Heads of Terms preparation and negotiation support through to signed SPA.",
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="bg-card px-6 py-12 md:py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Capabilities
      </h2>
      <p className="mx-auto mb-12 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A full-spectrum buy-side advisory capability for acquiring UK SME businesses.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <div key={c.title} className="rounded-md border border-border bg-background p-6 shadow-sm">
            <c.icon className="mb-4 h-7 w-7 text-accent" />
            <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-base font-semibold text-foreground">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
