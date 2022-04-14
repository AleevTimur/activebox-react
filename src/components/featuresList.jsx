import React from "react";
import FeatureItem from "./featureItem";
const featuresData = [
  {
    id: 1,
    imageUrl: "img/features/feature-1.png",
    title: "Easily Customised",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla",
  },
  {
    id: 2,
    imageUrl: "img/features/feature-2.png",
    title: "Responsive ready",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla",
  },
  {
    id: 3,
    imageUrl: "img/features/feature-3.png",
    title: "Modern design",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla",
  },
  {
    id: 4,
    imageUrl: "img/features/feature-4.png",
    title: "Clean Code",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla",
  },
  {
    id: 5,
    imageUrl: "img/features/feature-5.png",
    title: "Ready to Ship",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla",
  },
  {
    id: 6,
    imageUrl: "img/features/feature-6.png",
    title: "Download for Free",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla",
  },
];

const FeaturesList = () => {
  return (
    <div className="container" id="features">
      <div className="features">
        {featuresData &&
          featuresData.map((feature) => (
            <FeatureItem
              title={feature.title}
              text={feature.text}
              imageUrl={feature.imageUrl}
              key={feature.id}
            />
          ))}
      </div>
    </div>
  );
};

export default FeaturesList;
