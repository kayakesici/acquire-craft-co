const focuses = [
  "UK SME acquisitions",
  "Enterprise value £1m–£10m",
  "Owner-managed businesses",
  "Bolt-on acquisition strategies",
  "Profitable operating businesses",
];

const MarketFocusSection = () => (
  <section id="market-focus" className="bg-muted px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Market Focus
      </h2>
      <p className="mx-auto mb-10 max-w-[720px] text-center text-sm leading-[1.6] text-muted-foreground md:text-base">
        We operate exclusively within the UK lower mid-market, targeting acquisitions where disciplined execution creates measurable value.
      </p>

      <ul className="mx-auto max-w-[380px] space-y-2.5">
        {focuses.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm leading-[1.6] text-muted-foreground md:text-base">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MarketFocusSection;
