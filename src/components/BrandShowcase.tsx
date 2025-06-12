
const BrandShowcase = () => {
  const brands = [
    { name: "Disney", category: "Entertainment" },
    { name: "Skechers", category: "Footwear" },
    { name: "Umbro", category: "Sports" },
    { name: "Eviotto", category: "Fashion" },
    { name: "Marvel", category: "Entertainment" },
    { name: "Fortnite", category: "Gaming" },
    { name: "Adidas", category: "Sports" },
    { name: "New Balance", category: "Sports" },
    { name: "DC Comics", category: "Entertainment" },
    { name: "Polo Ralph Lauren", category: "Fashion" },
    { name: "Hugo Boss", category: "Fashion" },
    { name: "Cavalli Class", category: "Luxury" },
    { name: "Hello Kitty", category: "Character" },
    { name: "Michael Kors", category: "Fashion" },
    { name: "Guess", category: "Fashion" },
    { name: "rb", category: "Fashion" }
  ];

  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bb-blue to-bb-pink bg-clip-text text-transparent">
            Premium Brands We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic, licensed products from the world's most beloved brands, 
            all under one roof at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-bb-blue-light to-bb-pink-light rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{brand.name}</h3>
              <p className="text-xs text-gray-500">{brand.category}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            And many more exciting brands waiting for you to discover!
          </p>
          <div className="inline-flex items-center space-x-4">
            <img 
              src="/lovable-uploads/2475a604-6733-4eff-a091-5cbe5f061604.png" 
              alt="Ni" 
              className="w-16 h-16"
            />
            <span className="text-2xl">+</span>
            <img 
              src="/lovable-uploads/f6260070-2f72-4e01-ae7f-1df0f77d5756.png" 
              alt="Ra" 
              className="w-16 h-16"
            />
            <span className="text-lg font-medium text-gray-700 ml-4">
              Your shopping companions!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
