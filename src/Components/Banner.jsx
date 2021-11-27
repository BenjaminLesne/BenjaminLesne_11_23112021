import "../styles/Banner.css";
import React from "react";

class Banner extends React.Component {
  render() {
    const { text, imgUrl, big, square } = this.props;
    return (
      <div
        className={
          "banner" +
          (big ? " banner--big" : "") +
          (square ? " banner--square" : "")
        }
      >
        <div className="banner__background-mask"></div>
        <img
          className="banner__background-image"
          src={imgUrl}
          alt="decorative"
        />
        <p className="banner__text">{text}</p>
      </div>
    );
  }
}

export default Banner;
