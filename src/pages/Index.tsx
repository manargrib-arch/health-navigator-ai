import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PopularAnalysesSection } from "@/components/home/PopularAnalysesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <PopularAnalysesSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
