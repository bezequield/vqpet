import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import ProofSection from "@/components/ProofSection";
import CTASection from "@/components/CTASection";
import StickyCTA from "@/components/StickyCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <ProofSection />
      <CTASection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
