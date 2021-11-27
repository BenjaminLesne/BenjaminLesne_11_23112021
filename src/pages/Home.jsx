import React from "react";

import Banner from "../Components/Banner";
import MyImgUrl from "../assets/Homepage_banner.png";
import ProductLayout from "../Components/ProductsLayout";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Banner text="Chez vous, partout et ailleurs" imgUrl={MyImgUrl} />
        <ProductLayout />
      </main>
    );
  }
}

export default Home;
