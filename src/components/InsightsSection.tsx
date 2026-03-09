import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How to Evaluate a Small Business Acquisition",
    summary: "A framework for normalising earnings, stress-testing assumptions and building defensible valuations in UK SME transactions.",
  },
  {
    title: "Understanding Vendor Financing in SME Deals",
    summary: "When and how to structure deferred consideration, vendor loans and earn-outs to bridge valuation gaps.",
  },
  {
    title: "The Most Common Structures in UK SME Acquisitions",
    summary: "An overview of share purchases, asset deals, MBOs and the key commercial drivers behind each structure.",
  },
];

const InsightsSection = () => (
  <section id="insights" className="bg-card px-6 py-14 md:py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Market Perspectives
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Insights from the front line of UK SME acquisition execution.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((a) => (
          <article key={a.title} className="group rounded-md border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-['Playfair_Display',Georgia,serif] text-base font-semibold leading-snug text-foreground">
              {a.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors group-hover:text-accent/80">
              Read more <ArrowRight className="h-3 w-3" />
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
