const testimonials = [
  {
    quote: "The screening discipline was the biggest value. We avoided multiple poor opportunities early and focused only on viable targets.",
    author: "SME Buyer, UK",
  },
  {
    quote: "Clear modelling, sensible structuring, and strong execution support through diligence. Operates like an internal M&A function.",
    author: "Private Investor",
  },
  {
    quote: "Professional, direct, and process-driven. Exactly what first-time acquirers need to run a credible acquisition process.",
    author: "Acquisition Entrepreneur",
  },
];

const TestimonialsSection = () => (
  <section className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-14 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Client Feedback
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.author} className="rounded border border-border bg-card p-6">
            <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <p className="text-xs font-medium text-foreground">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
