import React from "react";

export const ReviewItem = ({ imageUrl, author, text }) => {
  return (
    <div className="slick-item">
      <div className="reviews__item">
        <div className="reviews__photo">
          <img className="reviews__img" src={imageUrl} alt={author} />
        </div>
        <div className="reviews__content">
          <div className="reviews__text">{text}</div>
          <div className="reviews__author">{author}</div>
        </div>
      </div>
    </div>
  );
};
