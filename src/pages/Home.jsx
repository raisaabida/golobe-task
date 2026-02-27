import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchBox from "../components/home/SearchBox";
import RecentSearches from "../components/home/RecentSearches";
import BackpackSection from "../components/home/BackpackSection";
import TravelSection from "../components/home/TravelSection";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <SearchBox />
      <RecentSearches />
      <TravelSection />
      <BackpackSection />
      <Newsletter />
      <Footer />
    </div>
  );
}