import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import SearchProducts from "./components/SearchProducts";
import { ProductFavorinesContext } from "./context/ProductFavorinesContext";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Basket from "./components/Basket";
import SingleProducts from "./components/static/SingleProduct";

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header active={modalActive} setActive={setModalActive} />
        <div className=" d-flex">
          <Routes>
            <Route path="/products" element={<Products />} />

            <Route
              path="products/:productId"
              element={
                <SingleProducts
                  active={modalActive}
                  setActive={setModalActive}
                />
              }
            />
          </Routes>
          <Basket active={modalActive} setActive={setModalActive}></Basket>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
