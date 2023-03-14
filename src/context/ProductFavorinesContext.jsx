import React from "react";
import { useState } from "react";
import { GOODS } from "../components/Goods";

export const ProductFavorinesContext = React.createContext();
function ProductFavorinesProvider({ children }) {
  const [products, setProducts] = useState(GOODS);
  function hasProduct() {
    return !!products.filter((product) => product.addedToFavorites === true)
      .length;
  }

  function filterById(id) {
    return products.filter((product) => product.id == id)[0];
  }

  function addFavorites(id) {
    setProducts(
      products.map((product) => ({
        ...product,
        addedToFavorites: product.id === id ? true : product.addedToFavorites,
      }))
    );
  }

  function SizeSelection(productid, size) {
    products.map((product) => {
      if (productid == product.id) {
        product.size = size;
      }

      return product;
    });
    setProducts([...products]);
  }

  function removeFavorites(id) {
    setProducts(
      products.map((products) => ({
        ...products,
        addedToFavorites:
          products.id === id ? false : products.addedToFavorites,
      }))
    );
  }

  function addedToCart(id) {
    setProducts(
      products.map((product) => ({
        ...product,
        addedToCart: product.id === id ? true : product.addedToCart,
      }))
    );
  }

  return (
    <ProductFavorinesContext.Provider
      value={{
        products,
        hasProduct,
        addFavorites,
        removeFavorites,
        SizeSelection,
        addedToCart,
        filterById,
      }}
    >
      {children}
    </ProductFavorinesContext.Provider>
  );
}

export default ProductFavorinesProvider;
