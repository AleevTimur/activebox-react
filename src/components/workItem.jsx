import React from "react";

const WorkItem = ({ title, text, imageUrl }) => {
  return (
    <div className="works__item">
      <img className="works__photo" src={imageUrl} alt={title} />
      <div className="works__content">
        <div className="works__title">{title}</div>
        <div className="works__text">{text}</div>
      </div>
    </div>
  );
};

export default WorkItem;
