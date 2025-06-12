
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bb-gradient opacity-10"></div>
      
      {/* Floating Mascots */}
      <div className="absolute top-20 left-10 animate-bounce">
        <img 
          src="/lovable-uploads/2475a604-6733-4eff-a091-5cbe5f061604.png" 
          alt="Ni Character" 
          className="w-24 h-24 object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-32 right-16 animate-bounce" style={{ animationDelay: '1s' }}>
        <img 
          src="/lovable-uploads/f6260070-2f72-4e01-ae7f-1df0f77d5756.png" 
          alt="Ra Character" 
          className="w-28 h-28 object-contain drop-shadow-lg"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-bb-blue to-bb-pink bg-clip-text text-transparent">
            Beautiful Bundles
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            A Brand That Brings Deals!
          </p>
          
          <div className="bg-yellow-300 rounded-lg p-6 mb-8 inline-block transform rotate-1 shadow-lg">
            <p className="text-lg md:text-xl text-gray-800 font-medium">
              Branded & Licensed Apparel, Footwear,<br />
              Perfumes, Bags at best prices for all! 😍
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-bb-blue">
              <MapPin className="w-8 h-8 text-bb-blue mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Century Mall, Ground Floor<br />
                Shop No-5, Al Wuheida St<br />
                Hor Al Anz East - Dubai
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-bb-pink">
              <Clock className="w-8 h-8 text-bb-pink mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Store Hours</h3>
              <p className="text-gray-600 text-sm">
                Sunday - Thursday: 10AM - 10PM<br />
                Friday - Saturday: 10AM - 11PM
              </p>
            </div>
          </div>

          <Button 
            className="bb-gradient text-white text-lg px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            onClick={() => window.open('https://g.co/kgs/Wsr2kfz', '_blank')}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Visit Our Store Today!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
