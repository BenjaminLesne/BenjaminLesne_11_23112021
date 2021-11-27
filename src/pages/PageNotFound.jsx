import React from "react";
import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

class pageNotFound extends React.Component {
  render() {
    return (
      <main className="pageNotFound">
        <h1 className="pageNotFound__404">404</h1>
        <h2 className="pageNotFound__error-message">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/BenjaminLesne_11_23112021/">
          <p className="pageNotFound__link-to-home" href="#">
            Retourner sur la page d'accueil
          </p>
        </Link>
      </main>
    );
  }
}

export default pageNotFound;
