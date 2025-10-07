import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSlider from "@/components/sections/hero-slider";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PricingSection from "@/components/sections/pricing-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";
import { WhatsAppChat } from "@/components/whatsapp-chat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TechStackSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppChat />
    </>
  );
}
