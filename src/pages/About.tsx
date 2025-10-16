import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Beautiful Bundles: A Brand that Brings Deals</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            Established in 2022 by a passionate financial professional, our journey began with a vision to revolutionize the way families shop. Today, we proudly stand as a trusted one-stop shop for all, with over 300+ local and international brands under one roof.
          </p>

          <p>
            Discover a wide array of products, from Apparel, Footwear, Handbags, Perfumes to Stationery, Backpacks, Lunch bags, Bottles and Accessories at Beautiful Bundles!
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Brands</h2>
            <p>
              Get popular brands like New Balance, Skechers, Adidas, Umbro, Michael Kors, Guess, Rocco Baroccco, etc & licensed brands like Disney, Marvel, DC, Hello Kitty, Barbie and much more.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Retail</h2>
            <p>
              You can visit our own flagship store at Century Mall, Ground floor, Shop no-31, Al Wuheida St, Hor Al Anz East - Dubai. Get our unique stationery supplies at Threads, UAE's largest uniform-selling store.
            </p>
            <p>
              Additionally, we host/participate in grand events regularly in Dubai World Trade Centre, Cityland Mall, B1 Mall, Millennium Plaza Downtown Hotel, Alquoz Warehouse Sales etc.
            </p>
            <p>
              Our booth is also a popular shopping destination each year at Sharjah Expo's Events as we provide high quality branded products at affordable prices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Join Our Journey</h2>
            <p>
              We cherish the opportunity to connect with you beyond our website. Follow us on all our social media platforms to stay updated with new product details and promotions and build a community together.
            </p>
          </section>

          <p className="text-xl font-semibold text-center mt-8">
            Thank you for choosing Beautiful Bundles. Shop with us today and experience the beauty of style, convenience, and quality. Happy Shopping!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
