import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AllProducts } from "@/components/AllProducts";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <AllProducts />
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
