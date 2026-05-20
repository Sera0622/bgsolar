import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import MagneticCursor from "@/components/MagneticCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <MagneticCursor />
      <NoiseOverlay />
      <Nav />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProductsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </LenisProvider>
  );
}
