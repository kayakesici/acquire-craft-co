const points = [
  "Profitable UK business owners",
  "£1m–£20m revenue businesses",
  "Growth via bolt-on acquisitions",
  "Owners who want structured execution, not brokers",
];

const WhoWeWorkWithSection = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Who We Work With
      </h2>
      <div className="flex flex-col items-center gap-3">
        {points.map((p) => (
          <p key={p} className="text-sm text-muted-foreground md:text-base">
            {p}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWithSection;
