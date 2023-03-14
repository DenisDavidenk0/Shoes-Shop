import React, { useState } from "react";

import "../styles/PostcardStyle.css";
import "../styles/TitleStyle.css";
import "../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header({ setActive }) {
  return (
    <div className="bgColorCard blockHeader">
      <div className="d-flex justify-content-between mx-5 text-white p-2 ">
        <div style={{ marginLeft: "15%" }}>
          <h5 className="titleStyle">Shoes Shop</h5>
        </div>
        <div className="d-flex my-auto " style={{ marginRight: "18%" }}>
          <Link to="/products">
            <h5 className="mx-2 navLink ">Home</h5>
          </Link>

          <h5 className="mx-2 navLink">Profile</h5>
          <ShoppingCartIcon onClick={() => setActive(true)} />
          <h5 className="navLink"></h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
