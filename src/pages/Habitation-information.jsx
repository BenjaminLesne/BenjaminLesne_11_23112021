import Banner from "../Components/Banner";
import HabitationTitles from "../Components/Habitation-titles";
import Owner from "../Components/Habitation-owner";
import Accordion from "../Components/Accordion";
import Review from "../Components/Review";

import MyImgUrl from "../assets/Habitation-information_banner.png";

import "../styles/Tag.css";
import "../styles/information.css";
import "../styles/owner.css";

const HabitationInformation = () => {
  const data = [
    {
      id: 123,
      habitationName: "Cozy loft on the Canal Saint-Martin",
      location: "Paris, Île-de-France",
      owner: { firstName: "Alexandre", lastName: "Dumas", imgSrc: "" },
      tags: ["Cozy", "Canal", "Paris 10"],
      reviewScore: 3,
      description:
        "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). ",
      equipments: [
        "Climatisation",
        "Wi-Fi",
        "Cuisine",
        "Espace de travail",
        "Fer à repasser",
        "Sèche-cheveux",
        "Cintres",
      ],
    },
  ];
  //switch tag and owner
  return (
    <main className="main">
      <Banner imgUrl={MyImgUrl} big={true} square={true} />

      <section className="information">
        <div className="information__resume">
          <div className="information__place-and-tags">
            <HabitationTitles
              habitationName={data[0].habitationName}
              location={data[0].location}
            />

            <div className="tags">
              {data[0].tags.map((tag, index) => (
                <div key={"tag" + index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="owner-and-review">
            <Owner
              firstName={data[0].owner.firstName}
              lastName={data[0].owner.lastName}
              profilePicture={data[0].owner.imgSrc ? "display picture" : ""}
            />
            <Review reviewScore={data[0].reviewScore} id={data[0].id} />
          </div>
        </div>
        <div className="accordion__item--habitation-page-wrapper">
          <Accordion
            version="habitation-page"
            title="Description"
            content={data[0].description}
          />
          <Accordion version="habitation-page" title="Équipements">
            <ul>
              {data[0].equipments.map((item, index) => (
                <li key={"equipment" + index}>{item}</li>
              ))}
            </ul>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default HabitationInformation;
