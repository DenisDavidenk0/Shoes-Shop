import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

import "../styles/PostcardStyle.css";

import SinglProductFavorines from "./SinglProductFavorines";

function SearchProducts({ products, setValue }) {
  return (
    <Container style={{ margin: "20px 0 0 0", minWidth: "336px" }}>
      <Form.Control
        style={{
          borderRadius: "11px",
          border: "2px solid black",
          lineHeight: "19px",
          fontSize: "14px",
        }}
        type="text"
        placeholder="Try to find some shoes"
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          backgroundColor: "#E3E3E3",
          marginTop: "10px",
          borderRadius: "15px",
        }}
      >
        <h4 className="text-center ">Favorites</h4>
        <div style={{ paddingBottom: "10px", minHeight: "600px" }}>
          {products.map((product) => (
            <SinglProductFavorines product={product} key={product.id} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SearchProducts;
