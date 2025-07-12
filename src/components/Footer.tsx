import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">eShop</h3>
            <p className="text-muted-foreground">
              Your trusted partner for premium products and exceptional shopping experience. 
              Quality guaranteed, customer satisfaction first.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["About Us", "Contact", "FAQ", "Shipping Info", "Returns", "Privacy Policy"].map((link) => (
                <div key={link}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Categories</h4>
            <div className="space-y-2">
              {["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Beauty"].map((category) => (
                <div key={category}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                    {category}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@eshop.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 eShop. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Terms of Service
            </Button>
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};