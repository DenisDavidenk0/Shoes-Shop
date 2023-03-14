import { useContext, useState } from "react";
import { Row } from "react-bootstrap";

import Product from "./Product";
import "../styles/PostcardStyle.css";

import { ProductFavorinesContext } from "../context/ProductFavorinesContext";
import SearchProducts from "./SearchProducts";

function Products() {
  const { products } = useContext(ProductFavorinesContext);

  const [value, setValue] = useState("");
  const filterProducts = products.filter((product) => {
    return product.model
      .toLowerCase()
      .trim()
      .includes(value.toLowerCase().trim());
  });

  return (
    <div
      style={{
        margin: "20px 20px 30px  299px",
      }}
      className="d-flex containerProduct  "
    >
      <Row
        style={{
          margin: "10px 20px 0  ",
          backgroundColor: "#E3E3E3",
          borderRadius: "20px",
          minHeight: "1000px",
          minWidth: "1220px",
        }}
      >
        {filterProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Row>

      <SearchProducts
        setValue={setValue}
        products={products.filter(
          (product) => product.addedToFavorites === true
        )}
      />
    </div>
  );
}

export default Products;
