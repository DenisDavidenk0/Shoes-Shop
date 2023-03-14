import { Container } from "react-bootstrap";
import "../styles/PostcardStyle.css";
import "../styles/HeaderStyle.css";

function SinglProductFavorines({ product }) {
  return (
    <Container>
      <div
        key={product.id}
        className="bgColorCard text-white  d-flex "
        style={{
          height: "94px",
          width: "226px",

          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          borderRadius: "15px",
        }}
      >
        <img
          style={{
            height: "70.47px",
            width: "70px",
            padding: "10px 0 10px 19px",
          }}
          src={product.imgSrc}
          alt=""
        />

        <div
          className=" openSansStyle"
          style={{
            fontSize: "14px",
            marginLeft: "14px",
            padding: "10px 5px 0 5px",
          }}
        >
          {product.brand} {product.model}
          <h5 style={{ marginTop: "5px", fontSize: "18px" }}>
            {product.price}$
          </h5>
        </div>
      </div>
    </Container>
  );
}
export default SinglProductFavorines;
