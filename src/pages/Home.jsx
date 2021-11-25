import Banner from "../Components/Banner";
import MyImgUrl from "../assets/Homepage_banner.png";
import ProductLayout from "../Components/ProductsLayout";

const Home = () => {
  return (
    <main>
      <Banner text="Chez vous, partout et ailleurs" imgUrl={MyImgUrl} />
      <ProductLayout />
    </main>
  );
};

export default Home;
