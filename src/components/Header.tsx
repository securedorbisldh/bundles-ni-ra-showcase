import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/9ff5253f-18eb-430f-9092-7794521eaffa.png" 
            alt="Beautiful Bundles Logo" 
            className="h-12 w-auto object-contain"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-700 hover:text-bb-blue transition-colors">About</Link>
          <button onClick={() => handleNavClick('brands')} className="text-gray-700 hover:text-bb-blue transition-colors">Brands</button>
          <button onClick={() => handleNavClick('location')} className="text-gray-700 hover:text-bb-blue transition-colors">Location</button>
          <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-bb-blue transition-colors">Contact</button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-bb-blue text-bb-blue hover:bg-bb-blue hover:text-white"
            onClick={() => window.open('https://www.instagram.com/beautiful_bundles_co/', '_blank')}
          >
            <Instagram className="w-4 h-4 mr-2" />
            Follow Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
