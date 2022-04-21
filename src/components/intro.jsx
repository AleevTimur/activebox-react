import React, { useState, useContext } from "react";
import { useHeaderListener } from "../hooks/useHeaderListener";

const Intro = () => {
  const [isHeaderFixed, introRef] = useHeaderListener();

  const [isBurgerOpen, toggleBurger] = useState(false);
  const onToggleBurgerMenu = () => {
    toggleBurger((currentState) => !currentState);
  };

  return (
    <>
      <header className={isHeaderFixed ? "header fixed" : "header"}>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src="img/activebox-logo.png" alt="" />
            </div>

            <nav className={isBurgerOpen ? "nav show" : "nav"}>
              <a className="nav__link" href="#features">
                Features
              </a>
              <a className="nav__link" href="#works">
                Works
              </a>
              <a className="nav__link" href="#team">
                Our Team
              </a>
              <a className="nav__link" href="#reviews">
                Testimonials
              </a>
              <a className="nav__link" href="#download">
                Download
              </a>
            </nav>

            <button
              className="burger"
              type="button"
              onClick={onToggleBurgerMenu}>
              <span className="burger__item">Menu</span>
            </button>
          </div>
        </div>
      </header>
      <div className="intro" ref={introRef}>
        <div className="container">
          <div className="intro__inner">
            <h1 className="intro__title">
              Your Favorite One Page Multi Purpose Template
            </h1>
            <h2 className="intro__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo cursus magna vel scelerisque nisl consectetur et.
            </h2>
            <a className="btn btn--red" href="#">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
