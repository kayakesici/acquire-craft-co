const points = [
  "Owner-managed businesses (£1m–£20m revenue)",
  "Acquisition entrepreneurs and private investors",
  "Companies pursuing bolt-on acquisition strategies",
  "Buyers seeking structured deal execution rather than brokers",
];

const WhoWeWorkWithSection = () => (
  <section className="bg-card px-6 py-16 md:py-24">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Who We Work With
      </h2>
      <p className="mb-12 text-sm leading-relaxed text-muted-foreground md:text-base">
        Owner-operators and investors actively acquiring UK businesses.
      </p>
      <div className="flex flex-col items-center gap-4">
        {points.map((p) => (
          <p key={p} className="max-w-lg text-sm text-muted-foreground md:text-base">
            {p}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWithSection;
