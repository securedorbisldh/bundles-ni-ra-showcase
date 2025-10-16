
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import StoreGallery from "@/components/StoreGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="gallery">
        <StoreGallery />
      </div>
      <div id="brands">
        <BrandShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
