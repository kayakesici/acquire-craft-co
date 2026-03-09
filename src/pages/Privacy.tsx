import { Link } from "react-router-dom";

const Privacy = () => (
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
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mb-8 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Introduction</h2>
          <p>The Acquisition Team ("we", "our", "us") is committed to protecting the privacy of individuals who visit our website or engage with our services. This Privacy Policy explains how we collect, use and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Information We Collect</h2>
          <p className="mb-3">We may collect the following categories of personal data:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>Name and contact details provided through scheduling forms or direct enquiry</li>
            <li>Email address and telephone number</li>
            <li>Business or company information relevant to acquisition advisory services</li>
            <li>Website usage data including IP address, browser type and pages visited</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p className="mb-3">We use your personal data for the following purposes:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>To respond to enquiries and schedule consultations</li>
            <li>To provide acquisition advisory and transaction support services</li>
            <li>To contact potential clients regarding our advisory services</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Cookies and Website Analytics</h2>
          <p>Our website may use cookies and similar technologies to analyse website traffic and improve user experience. You can control cookie preferences through your browser settings. We may use third-party analytics services to understand how visitors interact with our website.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Third-Party Services</h2>
          <p>We may use third-party services such as scheduling platforms (e.g. Calendly) and analytics tools. These services may collect data in accordance with their own privacy policies. We encourage you to review the privacy policies of any third-party services you interact with through our website.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Data Retention</h2>
          <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. When data is no longer needed, it is securely deleted or anonymised.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Your Data Rights</h2>
          <p className="mb-3">Under UK GDPR, you have the following rights:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>Right of access to your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure of your data</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us using the details below.</p>
        </section>

        <section>
          <h2 className="mb-3 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-foreground">Contact Information</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:</p>
          <p className="mt-2 font-medium text-foreground">
            <a href="mailto:dealflow@acquisitionteam.co.uk" className="underline underline-offset-4 transition-colors hover:text-accent">
              dealflow@acquisitionteam.co.uk
            </a>
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default Privacy;
