import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

class Card extends React.Component {
  render() {
    const { img, title, dataIndex } = this.props;
    return (
      <Link
        to={"/BenjaminLesne_11_23112021/habitation-information/" + dataIndex}
      >
        <article className="card">
          <div className="card__imgWrapper">
            <img className="card__img" src={img} alt="cover" />
            <div className="card__img-mask">
              <div className="card__info">
                <h2 className="card__title">{title}</h2>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }
}

export default Card;
