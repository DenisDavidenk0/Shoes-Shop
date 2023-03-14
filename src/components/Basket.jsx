import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "../styles/modal.css";

import { ProductFavorinesContext } from "../context/ProductFavorinesContext";
import BasketItem from "./BasketItem";
import SinglProductFavorines from "./SinglProductFavorines";
import Total from "./Total";

function Basket({ active, setActive }) {
  const { products } = useContext(ProductFavorinesContext);

  return (
    <>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={active ? "modal__content d-flex active" : "modal__content"}
        >
          <BasketItem
            products={products.filter((product) => product.addedToCart)}
          />
        </div>
      </div>
    </>
  );
}
export default Basket;
