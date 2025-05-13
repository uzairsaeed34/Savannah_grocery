import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ShopSection from "./components/ShopSection";
import FeaturedProducts from "./components/FeaturedProduct";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <Header />
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <ShopSection />
        <FeaturedProducts />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
