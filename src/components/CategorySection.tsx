import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Headphones, 
  Laptop, 
  Watch, 
  Camera, 
  GamepadIcon as Gamepad,
  ShirtIcon as Shirt,
  Home
} from "lucide-react";

export const CategorySection = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      count: 245,
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "Audio",
      icon: Headphones,
      count: 89,
      color: "bg-purple-50 text-purple-600"
    },
    {
      name: "Computers",
      icon: Laptop,
      count: 156,
      color: "bg-green-50 text-green-600"
    },
    {
      name: "Wearables",
      icon: Watch,
      count: 67,
      color: "bg-orange-50 text-orange-600"
    },
    {
      name: "Photography",
      icon: Camera,
      count: 123,
      color: "bg-red-50 text-red-600"
    },
    {
      name: "Gaming",
      icon: Gamepad,
      count: 98,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      name: "Fashion",
      icon: Shirt,
      count: 312,
      color: "bg-pink-50 text-pink-600"
    },
    {
      name: "Home",
      icon: Home,
      count: 189,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section id="categories" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection organized by categories to find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                className="group cursor-pointer hover:shadow-medium transition-all duration-300 border-border"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} products
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};