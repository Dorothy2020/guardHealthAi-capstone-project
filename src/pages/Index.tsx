import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RiskAssessment from "@/components/RiskAssessment";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <RiskAssessment />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
