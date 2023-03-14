import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useOutletContext, useParams } from "react-router-dom";
import { ProductFavorinesContext } from "../../context/ProductFavorinesContext";
import "../../styles/SingleProductStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function SingleProduct({ setActive }) {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { products, SizeSelection, addedToCart, filterById } = useContext(
    ProductFavorinesContext
  );

  useEffect(() => {
    setSingleProduct(
      products.filter((product) => product.id === +productId)[0]
    );
  }, [productId]);

  useEffect(() => {
    setSingleProduct(filterById(productId));
  }, [productId, products]);

  return (
    <>
      <div className="singleProductCard">
        <div style={{ display: "flex", margin: "6vw" }}>
          <img
            style={{ height: "350px", width: "400px" }}
            src={singleProduct.imgSrc}
          />
          <div style={{ width: "40vw", marginLeft: "50px" }}>
            <h3 className="titleSingleCard " style={{ fontSize: "42px" }}>
              {singleProduct.brand} {singleProduct.model}
            </h3>

            <h5 className="descriptionCard">{singleProduct.description}</h5>

            <div style={{ marginTop: "90px" }} className="d-flex">
              <div className="containerSizes">
                <div className="d-flex containerBorderSIze">
                  <div className="containerSizes">
                    {singleProduct?.dimensions?.map((size, id) => (
                      <button
                        onClick={() => SizeSelection(productId, size)}
                        key={id}
                        size={size}
                        singleProduct={singleProduct}
                        className={"singleBorderSize"}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {singleProduct?.addedToCart ? (
                  <button
                    className="buttonGoToCart"
                    style={{ marginLeft: "300px" }}
                    onClick={() => setActive(true)}
                  >
                    Товар уже в корзине <ShoppingCartIcon />
                  </button>
                ) : (
                  <button
                    onClick={() => addedToCart(singleProduct.id)}
                    style={{ marginLeft: "300px" }}
                    className="buttonBuySingleProduct"
                  >
                    Buy
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
