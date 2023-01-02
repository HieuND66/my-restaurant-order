import AboutSection from "../components/PageComponents/HomePage/AboutSection";
import BannerSection from "../components/PageComponents/HomePage/BannerSection";
import BlogSection from "../components/PageComponents/HomePage/BlogSection";
import CategorySection from "../components/PageComponents/HomePage/CategorySection";
import HomeSection from "../components/PageComponents/HomePage/HomeSection";
import OrderSection from "../components/PageComponents/HomePage/OrderSection";
import PopularSection from "../components/PageComponents/HomePage/PopularSection";

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <CategorySection />
      <AboutSection />
      <BannerSection />
      <PopularSection />
      <OrderSection />
      <BlogSection />
    </div>
  );
};
export default HomePage;
