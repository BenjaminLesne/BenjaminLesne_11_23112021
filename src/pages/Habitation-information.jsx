import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import HabitationTitles from "../Components/Habitation-titles";
import Owner from "../Components/Habitation-owner";
import Accordion from "../Components/Accordion";
import Review from "../Components/Review";

import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

import "../styles/Tag.css";
import "../styles/information.css";
import "../styles/owner.css";
import "../styles/Banner.css";

//I can't get url params with react-router if I don't use function.The library-provided HOC, withRouter, has been deprecated in React Router v6
//https://github.com/remix-run/react-router/issues/7256

const HabitationInformation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [productData, setProductData] = useState([]);
  const [targetIndex, setTargetIndex] = useState(0);

  useEffect(() => {
    //somehow here the path is ../logements.json when its ./logements.json in ProductsLayout component
    fetch("../logements.json")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setProductData(result);
        },
        (error) => {
          setIsLoaded(true);

          console.log(error);
        }
      );
  }, []);

  let { habitationIndex } = useParams();
  let totalIndex;

  const handleArrowClick = (operation) => {
    const newValue = targetIndex + operation;

    switch (true) {
      case newValue < 0:
        // this.setState({ targetIndex: totalIndex });
        setTargetIndex(totalIndex);
        break;
      case newValue > totalIndex:
        // this.setState({ targetIndex: 0 });
        setTargetIndex(0);
        break;

      default:
        // this.setState({ targetIndex: newValue });
        setTargetIndex(newValue);
        break;
    }
  };

  if (isLoaded) {
    //total of pictures in the picture gallery
    totalIndex = productData[habitationIndex]?.pictures.length - 1;
  }
  return (
    <main className="main">
      {isLoaded ? (
        0 <= habitationIndex && habitationIndex < productData.length ? (
          <div>
            <div className="banner banner--big banner--square">
              {totalIndex > 1 ? (
                <ArrowRight onClick={() => handleArrowClick(-1)} />
              ) : null}

              <img
                className="banner__background-image"
                src={productData[habitationIndex].pictures[targetIndex]}
                alt="habitation with a bed and decoration"
              />

              <p className="banner__picture-index">
                {targetIndex + 1}/{totalIndex + 1}
              </p>
              {totalIndex > 1 ? (
                <ArrowRight onClick={() => handleArrowClick(+1)} />
              ) : null}
            </div>

            <section className="information">
              <div className="information__resume">
                <div className="information__place-and-tags">
                  <HabitationTitles
                    habitationName={productData[habitationIndex].title}
                    location={productData[habitationIndex].location}
                  />

                  <div className="tags">
                    {productData[habitationIndex].tags.map((tag, index) => (
                      <div
                        key={"tag" + productData[habitationIndex].id + index}
                        className="tag"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="owner-and-review">
                  <Owner
                    name={productData[habitationIndex].host.name}
                    profilePicture={productData[habitationIndex].host.picture}
                  />
                  <Review
                    reviewScore={productData[habitationIndex].rating}
                    id={"review" + productData[habitationIndex].id}
                  />
                </div>
              </div>
              <div className="accordion__item--habitation-page-wrapper">
                <Accordion
                  version="habitation-page"
                  title="Description"
                  content={productData[habitationIndex].description}
                />
                <Accordion version="habitation-page" title="Équipements">
                  <ul>
                    {productData[habitationIndex].equipments.map(
                      (item, index) => (
                        <li
                          key={
                            "equipment" +
                            productData[habitationIndex].id +
                            index
                          }
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </Accordion>
              </div>
            </section>
          </div>
        ) : (
          <PageNotFound />
        )
      ) : (
        "LOADING"
      )}
    </main>
  );
};

export default HabitationInformation;
