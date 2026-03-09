const focuses = [
  "UK SME acquisitions",
  "Enterprise value £1m–£10m",
  "Owner-managed businesses",
  "Bolt-on acquisition strategies",
  "Revenue-generating, profitable trading businesses",
];

const MarketFocusSection = () => (
  <section id="market-focus" className="bg-muted px-6 py-12 md:py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Market Focus
      </h2>
      <p className="mx-auto mb-10 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        We operate exclusively within the UK lower mid-market, targeting acquisitions where disciplined execution creates measurable value.
      </p>

      <ul className="mx-auto max-w-md space-y-3">
        {focuses.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MarketFocusSection;
