import React, { useState } from "react";
import { ReactComponent as DownChevron } from "../assets/Down-chevron.svg";
import "../styles/Accordion.css";

const Accordion = ({ title, content, version, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={
        "accordion__item" + (version ? " accordion__item--" + version : "")
      }
    >
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <div className="accordion__open">
              <DownChevron />
            </div>
          ) : (
            <DownChevron />
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion__content">
          {content}
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
