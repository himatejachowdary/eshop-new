import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Offers
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive deals, and special promotions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};