import Hero from "../components/Hero";
import FeaturesInline from "../components/FeaturesInline";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";
import OpeningSection from "../components/OpeningSection";

export default function Home() {
  return (
    <>  
      
      <Hero />
      <OpeningSection />
      <FeaturesInline />
      <Gallery />
      <StatsSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
