
const BrandShowcase = () => {
  const brands = [
    { 
      name: "Disney", 
      category: "Entertainment",
      logo: "/lovable-uploads/3a5d3ed0-829a-4096-b765-3ba6c79e1257.png"
    },
    { 
      name: "Adidas", 
      category: "Sports",
      logo: "/lovable-uploads/fb8431f0-90a1-43f6-97ed-5fb3d3d6a30e.png"
    },
    { 
      name: "Umbro", 
      category: "Sports",
      logo: "/lovable-uploads/3a5d3ed0-829a-4096-b765-3ba6c79e1257.png"
    },
    { 
      name: "New Balance", 
      category: "Sports",
      logo: "/lovable-uploads/075b485e-6651-42fd-84da-01d28a1cf43b.png"
    },
    { 
      name: "Hugo Boss", 
      category: "Fashion",
      logo: "/lovable-uploads/fd81bfc3-99c7-4745-96d0-4c93059370d4.png"
    },
    { 
      name: "Cavalli Class", 
      category: "Luxury",
      logo: "/lovable-uploads/c4fcba5a-71cb-45cf-9424-228b25743cf8.png"
    },
    { 
      name: "Hello Kitty", 
      category: "Character",
      logo: "/lovable-uploads/57064f54-a9d4-47ef-a9ea-5ad42bb40dfd.png"
    },
    { 
      name: "Michael Kors", 
      category: "Fashion",
      logo: "/lovable-uploads/b958ac05-132a-4197-8c1c-5bc49d7ed22b.png"
    },
    { 
      name: "Guess", 
      category: "Fashion",
      logo: "/lovable-uploads/83328b39-22e9-4adf-aeb1-b9ec32680d6a.png"
    },
    { 
      name: "rb", 
      category: "Fashion",
      logo: "/lovable-uploads/f32aeb9f-e934-424a-9878-357def5ace1a.png"
    }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center flex flex-col items-center justify-center min-h-[120px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-sm">{brand.name}</h3>
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
              className="w-16 h-16 object-contain"
            />
            <span className="text-2xl">+</span>
            <img 
              src="/lovable-uploads/f6260070-2f72-4e01-ae7f-1df0f77d5756.png" 
              alt="Ra" 
              className="w-16 h-16 object-contain"
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
