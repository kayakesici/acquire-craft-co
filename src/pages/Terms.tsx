import { Link } from "react-router-dom";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-['Playfair_Display',Georgia,serif] text-lg font-semibold tracking-tight text-foreground">
          The Acquisition Team
        </Link>
        <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          ← Back to Home
        </Link>
      </div>
    </nav>

    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Terms</h1>
      <p className="mb-8 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Overview of Services</h2>
          <p>The Acquisition Team provides transaction support, deal origination, financial modelling, and acquisition execution services to buyers of UK SME businesses. Our services are advisory in nature and are designed to support clients through the acquisition process from origination to completion.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">No Investment Advice Disclaimer</h2>
          <p>The Acquisition Team does not provide regulated investment advice. Our services consist of transaction support, deal analysis, and advisory services only. We do not make investment recommendations and do not assume financial liability for any transaction. Clients should obtain independent financial, legal, and tax advice before proceeding with any acquisition.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Confidentiality Expectations</h2>
          <p>All information shared between The Acquisition Team and our clients in the course of an engagement is treated as confidential. We expect the same standard of confidentiality from our clients regarding any proprietary processes, deal flow information, or financial analysis we provide.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, The Acquisition Team shall not be liable for any indirect, incidental, consequential, or special damages arising from or in connection with the use of our services or this website. Our total liability in respect of any engagement shall not exceed the fees paid by the client for that engagement.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Use of Website</h2>
          <p>This website is provided for informational purposes only. The content does not constitute an offer, solicitation, or recommendation to acquire any business. While we make reasonable efforts to ensure the accuracy of content on this website, we make no warranties regarding its completeness or accuracy.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Third-Party Introductions</h2>
          <p>Where The Acquisition Team makes introductions to third parties such as lenders, solicitors, accountants, or other professional advisors, these are provided on an introductory basis only. We accept no responsibility for the services provided by third parties and clients should conduct their own due diligence before engaging any introduced party.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Governing Law</h2>
          <p>These terms and any engagement with The Acquisition Team shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </section>
      </div>
    </main>
  </div>
);

export default Terms;
