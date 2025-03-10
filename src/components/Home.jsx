import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProfileSection from "./sections/ProfileSection";
import TestimonialSection from "./sections/TestimonialSection";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="profile">
        <ProfileSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
