import React from "react";
import "./Card.scss";
const Card = ({ imgSrc, title, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="title" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
