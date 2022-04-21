import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReviewItem } from "../ReviewItem/ReviewItem";

const reviewsData = [
  {
    id: 1,
    author: "Susan Sims, Interaction Designer at XYZ",
    text: "“Integer posuere erat a ante venenatis dapibus posuere velitaliquet. Donec sed odio dui. Aenean eu leo quam...”",
    imageUrl: "img/reviews/review-1.jpg",
  },
  {
    id: 2,
    author: "Susan Sims, Interaction Designer at XYZ",
    text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat iure sed placeat laborum, labore explicabo impeditqui! Laudantium, unde voluptates sit animi tenetur veniamdolorem corrupti magnam, ipsum ab, recusandae!”",
    imageUrl: "img/reviews/review-1.jpg",
  },
];
export const Reviews = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviewElements = reviewsData.map((review) => (
    <ReviewItem
      key={review.id}
      author={review.author}
      text={review.text}
      imageUrl={review.imageUrl}
    />
  ));

  return (
    <div className="reviews" id="reviews">
      <div className="container">
        <div className="reviews__slider">
          <Slider {...settings}>{reviewElements}</Slider>
        </div>
      </div>
    </div>
  );
};
