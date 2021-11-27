import React from "react";
import "../styles/About.css";
import Banner from "../Components/Banner";
import MyImgUrl from "../assets/About_banner.png";

import Accordion from "../Components/Accordion";
import { aboutData } from "../utils/aboutData";

class About extends React.Component {
  render() {
    return (
      <main>
        <Banner imgUrl={MyImgUrl} square={true} />
        <div className="accordion">
          {aboutData.map(({ title, content }, index) => (
            <Accordion key={index + index} title={title} content={content} />
          ))}
        </div>
      </main>
    );
  }
}

export default About;
