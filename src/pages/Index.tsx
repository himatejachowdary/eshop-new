import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
