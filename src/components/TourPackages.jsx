import React from "react";
import TourCard from "./TourCard";
import "./TourPackages.scss";
const TourPackages = () => {
  return (
    <div className="TourPackages">
      <h1>Uttrakhand Tour Packages</h1>
      <p>
        Plan your tour to Uttrakhand with our handpicked travel inineraries and
        tour packages . Browse packages of your choice by estination or number
        of days you have for travel .
      </p>
      <div className="tourCol1">
        <TourCard
          imgSrc="https://www.euttaranchal.com/tourism/photos/kedartal-1582704.jpg"
          price="35000 onwards"
          location="Kedartal with patangnidhar and Rudugaira valley Base Camp Trek"
          period="8 Days / 7 Nights"
        />
        <TourCard
          imgSrc="https://www.euttaranchal.com/tourism/photos/tapovan-gangotri-5849449.jpg"
          price="30000 onwards"
          location="Gaumukh - Tapovan Trek Package"
          period="7 Days / 6 Nights"
        />
        <TourCard
          imgSrc="https://www.euttaranchal.com/tourism/photos/valley-of-flowers-3068987.jpg"
          price="40000 onwards"
          location="Valley of flowers and Hemkunk sahib luxury tour package (Ex-Haridwar)"
          period="6 Days / 5 Nights"
        />
      </div>
    </div>
  );
};

export default TourPackages;
