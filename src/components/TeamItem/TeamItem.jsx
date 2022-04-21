import React from "react";

export const TeamItem = ({ name, profession, description, photo, links }) => {
  const linksList = links && Object.entries(links);
  const linkElements = linksList.map(([network, link]) => {
    if (link) {
      return (
        <a
          key={link}
          className="social__item"
          href={link}
          target="_blank"
          rel="noreferrer">
          {/* <img src={`img/${network}.svg`} alt={network} /> */}
        </a>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="team__item">
      <img className="team__photo" src={photo} alt={name} />
      <div className="team__name">{name}</div>
      <div className="team__prof">{profession}</div>
      <div className="team__text">
        <p>{description}</p>
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam
          quis risus eget urna mollis ornare vel eu leo.
        </p>
      </div>
      <div className="social">{linkElements}</div>
    </div>
  );
};
