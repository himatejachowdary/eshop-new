import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";

export const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Wireless Smartphone",
      price: 699,
      originalPrice: 799,
      image: productPhone,
      rating: 4.8,
      reviews: 245,
      discount: 12,
      isNew: true
    },
    {
      id: "2", 
      name: "Wireless Noise Cancelling Headphones",
      price: 299,
      originalPrice: 399,
      image: productHeadphones,
      rating: 4.7,
      reviews: 156,
      discount: 25
    },
    {
      id: "3",
      name: "Ultra-Slim Professional Laptop", 
      price: 1299,
      image: productLaptop,
      rating: 4.9,
      reviews: 89,
      isNew: true
    },
    {
      id: "4",
      name: "Elegant Smartwatch Pro",
      price: 399,
      originalPrice: 499,
      image: productWatch,
      rating: 4.6,
      reviews: 203,
      discount: 20
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <Button variant="outline" className="mt-4 sm:mt-0">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};