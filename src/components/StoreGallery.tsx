
const StoreGallery = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bb-pink to-bb-blue bg-clip-text text-transparent">
            Visit Our Beautiful Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step into a world of authentic branded products, carefully curated to bring you 
            the best deals on premium apparel, footwear, accessories, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/56b2f05d-4de6-44d3-bd83-159a98051b2f.png" 
              alt="Beautiful Bundles Store Interior" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20">
              <img 
                src="/lovable-uploads/2475a604-6733-4eff-a091-5cbe5f061604.png" 
                alt="Ni Character" 
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-bb-blue to-bb-pink rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Beautiful Bundles?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  100% Authentic & Licensed Products
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Unbeatable Prices on Premium Brands
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Wide Variety of Categories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Convenient Location in Century Mall
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Product Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <span className="text-2xl mb-2 block">👕</span>
                  <p className="font-medium">Apparel</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <span className="text-2xl mb-2 block">👟</span>
                  <p className="font-medium">Footwear</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <span className="text-2xl mb-2 block">🎒</span>
                  <p className="font-medium">Bags</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <span className="text-2xl mb-2 block">🌸</span>
                  <p className="font-medium">Perfumes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreGallery;
