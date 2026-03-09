const WhatWeDoSection = () => (
  <section id="what-we-do" className="bg-card px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        How We Work With You
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        We embed into your business as your acquisition team — sourcing deals, analysing opportunities and managing transactions week by week.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Stage 1 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Stage 1</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-bold text-card-foreground">
            Build Your Pipeline
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Regular Deal Flow</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Define what you want to buy</li>
            <li>• Build sourcing channels</li>
            <li>• Screen inbound opportunities</li>
            <li>• Manage vendor conversations</li>
            <li>• Regular progress updates</li>
          </ul>
        </div>

        {/* Stage 2 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Stage 2</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-bold text-card-foreground">
            Assess the Opportunities
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Analyse the Deal</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Financial modelling</li>
            <li>• Earnings adjustments</li>
            <li>• Valuation scenarios</li>
            <li>• Risk analysis</li>
            <li>• Draft Offer Letter</li>
          </ul>
        </div>

        {/* Stage 3 */}
        <div className="rounded-md border border-border bg-background p-8 shadow-sm">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Stage 3</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-bold text-card-foreground">
            Complete the Transaction
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Access To Advisory Team</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Fundraising</li>
            <li>• Due Diligence (Legal & Tax)</li>
            <li>• Negotiation support</li>
            <li>• Successful Completion</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
