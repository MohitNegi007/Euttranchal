import React from "react";
import "./ProductCard.scss";
const ProductCard = ({ imgSrc, title, description }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="productBtn">Bug {title}</button>
    </div>
  );
};

export default ProductCard;
