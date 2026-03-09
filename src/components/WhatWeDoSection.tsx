const WhatWeDoSection = () => (
  <section id="what-we-do" className="bg-card px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        How We Operate
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A disciplined weekly cadence of deal origination, structured deal analysis, and transaction execution — embedded inside your operation as an outsourced acquisition function.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Stage 1 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Stage 1</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-bold text-card-foreground">
            Build the Acquisition Engine
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">£2,000 per month — 6-month minimum</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Define acquisition criteria</li>
            <li>• Build deal sourcing pipelines</li>
            <li>• Screen inbound opportunities</li>
            <li>• Coordinate vendor calls</li>
            <li>• Run a weekly deal pipeline</li>
          </ul>
        </div>

        {/* Stage 2 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Stage 2</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-bold text-card-foreground">
            Evaluate the Opportunity
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Paid per opportunity</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Financial modelling</li>
            <li>• EBITDA normalisation</li>
            <li>• Valuation scenarios (base, floor, upside)</li>
            <li>• Risk analysis</li>
            <li>• Draft offer or Heads of Terms preparation</li>
          </ul>
        </div>

        {/* Stage 3 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Stage 3</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-bold text-card-foreground">
            Execute the Transaction
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Success fee on completion</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Funding introductions</li>
            <li>• Diligence coordination</li>
            <li>• Legal and tax coordination</li>
            <li>• Negotiation support</li>
            <li>• Transaction management through completion</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
