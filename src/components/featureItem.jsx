import React from "react";

const FeatureItem = ({ title, text, imageUrl }) => {
  return (
    <div className="features__item">
      <img className="features__icon" src={imageUrl} alt={title} />
      <h4 className="features__title">{title}</h4>
      <div className="features__text">{text}</div>
    </div>
  );
};

export default FeatureItem;
