import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <WhoWeWorkWithSection />
      <WhatWeDoSection />
      <ProcessSection />
      <WhyUsSection />
      <TeamSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
