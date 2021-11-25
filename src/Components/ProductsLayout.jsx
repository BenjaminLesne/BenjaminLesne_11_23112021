import Card from "./Card";
import "../styles/ProductLayout.css";

const productData = [
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
  { img: "#", title: "Titre de la location" },
];

const ProductLayout = () => {
  return (
    <div className="productLayout">
      {productData.map((productCard, index) => (
        <Card
          key={"product-" + index}
          img={productCard.img}
          title={productCard.title}
        />
      ))}
    </div>
  );
};

export default ProductLayout;
