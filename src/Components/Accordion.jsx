import React from "react";
import { ReactComponent as DownChevron } from "../assets/Down-chevron.svg";
import "../styles/Accordion.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  render() {
    const { title, content, version, children } = this.props;

    // const Accordion = ({ title, content, version, children }) => {
    //   const [isActive, setIsActive] = useState(false);

    return (
      <div
        className={
          "accordion__item" + (version ? " accordion__item--" + version : "")
        }
      >
        <div
          className="accordion__title"
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          <div>{title}</div>
          <div>
            {this.state.isActive ? (
              <div className="accordion__open">
                <DownChevron />
              </div>
            ) : (
              <DownChevron />
            )}
          </div>
        </div>
        {this.state.isActive && (
          <div className="accordion__content">
            {content}
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Accordion;
