import React, { useState, useContext } from "react";
import { useHeaderListener } from "../../hooks/useHeaderListener";

const navItemsData = [
  {
    id: 1,
    name: "Features",
    anchor: "#features",
  },
  {
    id: 2,
    name: "Works",
    anchor: "#works",
  },
  {
    id: 3,
    name: "Our team",
    anchor: "#team",
  },
  {
    id: 4,
    name: "Testimonials",
    anchor: "#reviews",
  },
  {
    id: 5,
    name: "Download",
    anchor: "#download",
  },
];

export const Intro = () => {
  const [isHeaderFixed, introRef] = useHeaderListener();

  const [isBurgerOpen, toggleBurger] = useState(false);
  const onToggleBurgerMenu = () => {
    toggleBurger((currentState) => !currentState);
  };

  const navItemElements = navItemsData.map((navItem) => (
    <a className="nav__link" href={navItem.anchor} key={navItem.id}>
      {navItem.name}
    </a>
  ));

  return (
    <>
      <header className={isHeaderFixed ? "header fixed" : "header"}>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src="img/activebox-logo.png" alt="" />
            </div>

            <nav className={isBurgerOpen ? "nav show" : "nav"}>
              {navItemElements}
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
