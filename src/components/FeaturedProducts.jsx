import React from "react";
import ProductCard from "./ProductCard";
import "./FeaturedProducts.scss";
const FeaturedProducts = () => {
  return (
    <div className="FeaturedProducts">
      <h1 className="FeaturedProductHeading">Our Featured Products</h1>
      <div className="productCol1">
        <ProductCard
          imgSrc="https://www.euttaranchal.com/_imgs/mug-home.webp"
          title="Pahadi Mugs"
          description="Over 10 exclusive Pahadi Mugs to celebrate the spirit
      of Uttarakhand"
        />
        <ProductCard
          imgSrc="https://www.euttaranchal.com/_imgs/tee-home.webp"
          title="Pahadi T-Shirts"
          description="Pahadi T-Shirts and Hoodies for men and women . 
          Choose from several designs."
        />
        <ProductCard
          imgSrc="https://www.euttaranchal.com/_imgs/magnet-home.webp"
          title="Moblie Popups & Magents"
          description="Pahadi Moblie popups and magent printed with several design"
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
