import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const categories = [
    "Electronics",
    "Fashion", 
    "Home & Garden",
    "Sports",
    "Books",
    "Beauty",
    "Toys",
    "Sale"
  ];

  return (
    <nav className="bg-muted/50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="whitespace-nowrap text-sm font-medium hover:text-primary"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};