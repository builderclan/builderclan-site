import AboutSection from "@components/About";
import BackToTop from "@components/BackToTop";
import CTA from "@components/CTA";
import FaqSection from "@components/Faq";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomeSection from "@components/Home";
import OpportunitySection from "@components/Opportunity";

export default function Home() {
  return (
    <>
      <header className="fixed w-full top-4 sm:top-6 left-0 z-50 pointer-events-none">
        <Header />
      </header>
      <div className="pt-24 sm:pt-28">
        <HomeSection />
        <AboutSection />
        <OpportunitySection />
        <FaqSection />
        <CTA />
      </div>
      <Footer />
      <div className="fixed z-10">
        <BackToTop />
      </div>
    </>
  );
}
