import Card from "./Card";
import "../styles/ProductLayout.css";
import "../styles/ProductLayout.css";

import React from "react";

class ProductLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      productData: [],
    };
  }

  componentDidMount() {
    fetch("./logements.json")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({ isLoaded: true });

          this.setState({ productData: result });
        },
        (error) => {
          this.setState({ isLoaded: true });
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className="productLayout">
        {this.state.productData.map((productCard, index) => (
          <Card
            key={productCard.id}
            img={productCard.cover}
            title={productCard.title}
            dataIndex={index}
          />
        ))}
      </div>
    );
  }
}

export default ProductLayout;
