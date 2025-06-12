
import { Instagram, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img 
              src="/lovable-uploads/9ff5253f-18eb-430f-9092-7794521eaffa.png" 
              alt="Beautiful Bundles Logo" 
              className="h-16 w-auto mb-4 filter brightness-0 invert object-contain"
            />
            <p className="text-gray-400 mb-4">
              Your trusted destination for authentic branded products at unbeatable prices.
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/2475a604-6733-4eff-a091-5cbe5f061604.png" 
                alt="Ni" 
                className="w-8 h-8 object-contain"
              />
              <img 
                src="/lovable-uploads/f6260070-2f72-4e01-ae7f-1df0f77d5756.png" 
                alt="Ra" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-gray-400">Meet Ni & Ra!</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-bb-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#brands" className="text-gray-400 hover:text-white transition-colors">Our Brands</a></li>
              <li><a href="#location" className="text-gray-700 hover:text-white transition-colors">Store Location</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-bb-pink">Store Hours</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Sun - Thu: 10AM - 10PM</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Fri - Sat: 10AM - 11PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-bb-blue">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-bb-pink" />
                <span className="text-sm text-gray-400">
                  Century Mall, Ground Floor<br />
                  Shop No-5, Al Wuheida St<br />
                  Hor Al Anz East - Dubai
                </span>
              </div>
              <Button 
                className="bb-gradient text-white w-full mt-4"
                onClick={() => window.open('https://www.instagram.com/beautiful_bundles_co/', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow @beautiful_bundles_co
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Beautiful Bundles. All rights reserved. | A Brand That Brings Deals!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
