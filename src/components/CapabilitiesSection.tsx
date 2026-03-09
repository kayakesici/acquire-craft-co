import { Search, BarChart3, FileText, Target } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Deal Origination & Pipeline Development",
    desc: "Systematic sourcing of proprietary and intermediated opportunities aligned to defined acquisition criteria.",
  },
  {
    icon: Search,
    title: "Opportunity Screening & Deal Analysis",
    desc: "Structured screening and fast-kill discipline applied to every inbound and outbound opportunity.",
  },
  {
    icon: BarChart3,
    title: "Financial Modelling & Valuation",
    desc: "Normalised EBITDA analysis, base/floor/upside valuation scenarios, and debt service coverage modelling.",
  },
  {
    icon: FileText,
    title: "Transaction Execution & Coordination",
    desc: "Deal structuring, Heads of Terms preparation, and coordination across lenders, lawyers and accountants through to completion.",
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="bg-card px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Capabilities
      </h2>
      <p className="mx-auto mb-12 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A full-spectrum buy-side advisory capability for acquiring UK SME businesses.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <div key={c.title} className="rounded-md border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
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
