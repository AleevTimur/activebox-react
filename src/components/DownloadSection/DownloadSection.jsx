import React from "react";

export const DownloadSection = () => {
  return (
    <div className="download" id="download">
      <div className="container">
        <h3 className="download__title">
          Are You Ready to Start? Download Now For Free!
        </h3>
        <div className="download__text">
          <p>Fusce dapibus, tellus ac cursus commodo</p>
        </div>
        <a className="btn btn--red btn--long" href="#">
          Download Here
        </a>
      </div>
    </div>
  );
};
