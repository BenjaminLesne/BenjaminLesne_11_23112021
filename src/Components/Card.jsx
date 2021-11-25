import "../styles/Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { img, title } = props;

  return (
    <Link to="/BenjaminLesne_11_23112021/habitation-information">
      <article className="card">
        <div className="card__imgWrapper">
          <div className="card__img" href={img}></div>
        </div>
        <div className="card__info">
          <h2 className="card__title">{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default Card;
