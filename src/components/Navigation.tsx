import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const categories = [
    { name: "Electronics", id: "electronics" },
    { name: "Fashion", id: "fashion" }, 
    { name: "Home & Garden", id: "home" },
    { name: "Sports", id: "sports" },
    { name: "Books", id: "books" },
    { name: "Beauty", id: "beauty" },
    { name: "Toys", id: "toys" },
    { name: "Sale", id: "sale" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === "sale" ? "products" : "categories");
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-muted/50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="whitespace-nowrap text-sm font-medium hover:text-primary"
              onClick={() => scrollToSection(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};