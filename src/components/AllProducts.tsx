import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productPerfume from "@/assets/product-perfume.jpg";

export const AllProducts = () => {
  const allProducts = [
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
    },
    {
      id: "5",
      name: "Professional Digital Camera",
      price: 899,
      originalPrice: 1099,
      image: productCamera,
      rating: 4.9,
      reviews: 67,
      discount: 18,
      isNew: true
    },
    {
      id: "6",
      name: "Athletic Running Shoes",
      price: 129,
      originalPrice: 179,
      image: productShoes,
      rating: 4.5,
      reviews: 312,
      discount: 28
    },
    {
      id: "7",
      name: "RGB Gaming Mechanical Keyboard",
      price: 149,
      originalPrice: 199,
      image: productKeyboard,
      rating: 4.7,
      reviews: 128,
      discount: 25
    },
    {
      id: "8",
      name: "Luxury Fragrance Collection",
      price: 89,
      originalPrice: 120,
      image: productPerfume,
      rating: 4.8,
      reviews: 95,
      discount: 26
    }
  ];

  return (
    <section id="all-products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              All Products
            </h2>
            <p className="text-muted-foreground">
              Explore our complete collection of premium products
            </p>
          </div>
          <Button variant="outline" className="mt-4 sm:mt-0">
            Filter & Sort
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};