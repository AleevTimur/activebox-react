import React from "react";
import "./sprite.svg";

const TeamItem = ({ name, profession, description, photo, links }) => {
  //   const linksList =
  //     links &&
  //     links.map((link) => (
  //       <a className="social__item" href={`link`} target="_blank" rel="noreferrer">
  //         <svg className="social__icon">
  //           <use xlinkHref={`#${link}`} />
  //         </svg>
  //       </a>
  //     ));
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

      {/* <div className="social">{linksList}</div> */}
    </div>
  );
};

export default TeamItem;
