import "../styles/Owner-and-review.css";
import Star from "../assets/star";

const Review = (props) => {
  const { reviewScore, id } = props;

  //generate review stars
  let reviewHTML = [];
  //generate filled stars
  for (let index = 0; index < reviewScore; index++) {
    reviewHTML.push(<Star key={id + index + "#FF6060"} fillValue="#FF6060" />);
  }

  //generate empty stars
  for (let index = 0; index < 5 - reviewScore; index++) {
    reviewHTML.push(<Star key={id + index + "#E3E3E3"} fillValue="#E3E3E3" />);
  }
  return <div className="review">{reviewHTML.map((item) => item)}</div>;
};

export default Review;
