import "../styles/Banner.css";

const Banner = (props) => {
  const { text, imgUrl, big, square } = props;

  return (
    <div
      className={
        "banner" +
        (big ? " banner--big" : "") +
        (square ? " banner--square" : "")
      }
    >
      <div className="banner__background-mask"></div>
      <img className="banner__background-image" src={imgUrl} />
      <p className="banner__text">{text}</p>
    </div>
  );
};

export default Banner;
