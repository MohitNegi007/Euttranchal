import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="col1">
        <Link to="/">
          <h1>Find your Village</h1>
          <p>Uttrakhand Villages</p>
        </Link>
      </div>
      <div className="col2">
        <div className="item1">
          <p>300+ places</p>
        </div>
        <div className="item2">
          <p>1200+ Hotels</p>
        </div>
        <div className="item3">
          <p>75+ Treks</p>
        </div>
        <div className="item4">
          <p>90+ Tours</p>
        </div>
      </div>
      <div className="col3">
        <img
          src="https://www.euttaranchal.com/_imgs/matri-pic-home.webp"
          alt="💑"
        />
        <div className="col3Text">
          <h1>Uttrakhand Matrimonial</h1>
          <p>
            Tursted since 2003 , eUttranchal Matrimonial is the largest and most
            trusted online matrimonial for the people of uttrakhand
          </p>
          <button className="heroSectionBtn">5,000+ success stories</button>
          <button className="heroSectionBtn">25,000+ profiles</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
