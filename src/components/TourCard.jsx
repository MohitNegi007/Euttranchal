import React from "react";
import "./TourCard.scss";
const TourCard = ({ imgSrc, price, location, period }) => {
  return (
    <div className="tourCard">
      <img src={imgSrc} alt="location" />
      <h1>{location}</h1>
      <p>{period}</p>
      <button className="tourBtn">₹ {price}</button>
    </div>
  );
};

export default TourCard;
