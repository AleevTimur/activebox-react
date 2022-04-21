import React from "react";

const shareLinks = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
};

export const Footer = () => {
  const shareLinksData = Object.entries(shareLinks);
  const linkElements = shareLinksData.map(([network, link]) => (
    <a className="social__item" key={network} href={link} target="_blank">
      {/* <img src={`img/${network}.svg`} alt={network} /> */}
    </a>
  ));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__block">
            <h4 className="footer__title">Location</h4>
            <address className="footer__address">
              <div>3481 Melrose Place</div>
              <div>Beverly Hills, CA 90210</div>
            </address>
          </div>

          <div className="footer__block">
            <h4 className="footer__title">Share with Love</h4>
            <div className="social social--footer">{linkElements}</div>
          </div>

          <div className="footer__block">
            <h4 className="footer__title">About ActiveBox</h4>
            <div className="footer__text">
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="copyright__text">
            <div>Copyright © 2015 ActiveBox. All Rights Reserved</div>
            <div>
              Made <span>by Kamal Chaneman</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
