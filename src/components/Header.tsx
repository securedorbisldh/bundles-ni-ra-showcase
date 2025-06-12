
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/9ff5253f-18eb-430f-9092-7794521eaffa.png" 
            alt="Beautiful Bundles Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-bb-blue transition-colors">About</a>
          <a href="#brands" className="text-gray-700 hover:text-bb-blue transition-colors">Brands</a>
          <a href="#location" className="text-gray-700 hover:text-bb-blue transition-colors">Location</a>
          <a href="#contact" className="text-gray-700 hover:text-bb-blue transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-bb-blue text-bb-blue hover:bg-bb-blue hover:text-white">
            <Instagram className="w-4 h-4 mr-2" />
            Follow Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
