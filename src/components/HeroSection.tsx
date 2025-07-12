import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover Your
                <span className="text-primary block">Perfect Style</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Explore our curated collection of premium products with unbeatable prices 
                and exceptional quality. Shop with confidence and style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Shop Now
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Categories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroBanner}
                alt="Hero Banner"
                className="w-full h-auto rounded-2xl shadow-large"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};