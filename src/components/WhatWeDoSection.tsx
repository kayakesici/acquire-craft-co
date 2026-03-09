const WhatWeDoSection = () => (
  <section id="what-we-do" className="bg-card px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        How We Operate
      </h2>
      <p className="mx-auto mb-12 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A disciplined weekly cadence of deal origination, financial modelling and transaction execution — embedded inside your operation.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Stage 1 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Stage 1</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Build the Acquisition Engine
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">£2,000 per month — 6-month minimum</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Define acquisition criteria and build a systematic deal origination pipeline. Screen and triage opportunities with institutional discipline within a structured weekly cadence.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Stage 2</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Evaluate the Opportunity
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Paid per opportunity</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Full financial underwriting including clean EBITDA normalisation, base/floor/upside valuation scenarios, debt service coverage modelling, and indicative deal structure.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Stage 3</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Execute the Transaction
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Success fee on completion</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Funding introductions and lender comparison. Full transaction management through due diligence, legal coordination and deal structuring until completion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
