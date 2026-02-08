import { Check } from "lucide-react";

const items = [
  "Off-market origination across UK SMEs",
  "Broker intake filtering and qualification",
  "Clean EBITDA normalisation and valuation modelling",
  "Indicative deal structuring and Heads of Terms support",
  "Diligence coordination across finance, legal, tax, and ops",
  "Lender introductions and funding process support",
  "Execution guidance through to completion",
];

const WhatWeDoSection = () => (
  <section id="what-we-do" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        What We Do
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <span className="text-sm leading-relaxed text-muted-foreground md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhatWeDoSection;
