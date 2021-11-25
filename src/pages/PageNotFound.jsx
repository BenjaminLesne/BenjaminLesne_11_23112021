import "../styles/PageNotFound.css";

const pageNotFound = () => {
  return (
    <main className="pageNotFound">
      <h1 className="pageNotFound__404">404</h1>
      <h2 className="pageNotFound__error-message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <a className="pageNotFound__link-to-home" href="#">
        Retourner sur la page d'accueil
      </a>
    </main>
  );
};

export default pageNotFound;
