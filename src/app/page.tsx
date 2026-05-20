import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
<NoiseOverlay />
      <Nav />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProductsSection />
        <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
    </LenisProvider>
  );
}
