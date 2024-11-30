import BBDS from "./components/bbds";
import Brands from "./components/brands";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import NewArrivals from "./components/products-for-sale/newarrivals";
import TopSelling from "./components/products-for-sale/topselling";
import Reviews from "./components/reviews";
export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      <Brands />

      {/* New arrivals */}
      <NewArrivals />

      {/* Top selling */}
      <TopSelling />

      {/* Browse By Dress Style */}
      <BBDS />

      {/* Our Happy Customers */}
      <Reviews/>

      {/* Footer */}
      <Footer/>
    </>
  );
}
