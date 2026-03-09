import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import MarketFocusSection from "@/components/MarketFocusSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import InsightsSection from "@/components/InsightsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <CredibilityStrip />
      <ScrollReveal>
        <CapabilitiesSection />
      </ScrollReveal>
      <ScrollReveal>
        <MarketFocusSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhyUsSection />
      </ScrollReveal>
      <ScrollReveal>
        <InsightsSection />
      </ScrollReveal>
      <ScrollReveal>
        <TeamSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </main>
    <Footer />
  </div>
);

export default Index;
