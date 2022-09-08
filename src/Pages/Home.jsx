import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Article from "../components/Article";
import TourPackages from "../components/TourPackages";
import FeaturedProducts from "../components/FeaturedProducts";
import DiscoverSection from "../components/DiscoverSection";
import AboutUttaranchal from "../components/AboutUttaranchal";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Article />
      <TourPackages />
      <FeaturedProducts />
      <DiscoverSection />
      <AboutUttaranchal />
      <Footer />
      <Footer2 />
    </>
  );
};

export default Home;
