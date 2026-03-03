const WhatWeDoSection = () => (
  <section id="what-we-do" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        How We Operate
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        We run a disciplined weekly cadence inside your back office — from target identification through to deal completion.
      </p>

      <div className="space-y-10">
        {/* Stage 1 */}
        <div className="rounded border border-border bg-card p-6 md:p-8">
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">Stage 1</div>
          <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Build the Engine
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">£2,000 per month · 6-month minimum</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Define target criteria. Build and run deal sourcing pipelines. Screen inbound IMs and filter low-quality flow. Prepare and attend vendor calls. Operate a structured weekly cadence to maintain momentum.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="rounded border border-border bg-card p-6 md:p-8">
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">Stage 2</div>
          <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Underwrite the Opportunity
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Paid per opportunity</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Full financial model across floor, base, and max cases. EBITDA normalisation and risk analysis. Indicative deal structure and draft offer or Heads of Terms.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="rounded border border-border bg-card p-6 md:p-8">
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">Stage 3</div>
          <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Execute the Transaction
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Percentage of funds raised</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Funding introductions and lender comparison. Diligence coordination across finance, legal, tax, and operations. Legal introductions via partner firms — through to completion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
