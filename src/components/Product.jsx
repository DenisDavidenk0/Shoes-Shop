import { Card, Col } from "react-bootstrap";
import "../styles/PostcardStyle.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { ProductFavorinesContext } from "../context/ProductFavorinesContext";
import { Link } from "react-router-dom";
import "../styles/PostcardStyle.css";

function Product({ product }) {
  const { addFavorites, removeFavorites } = useContext(ProductFavorinesContext);

  return (
    <Col xs={12} sm={6} mb={1} lg={3} className={"mx-4 d-flex my-3 rounded "}>
      <Card className="bgColorCard text-white">
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={product.imgSrc} />
        </Link>
        <Card.Body className="text-center">
          <Link className="cardHoverNone" to={`/products/${product.id}`}>
            <Card.Title className="text-white">
              {product.brand} {product.model}
            </Card.Title>
          </Link>
          <Card.Text>${product.price}</Card.Text>

          {product.addedToFavorites ? (
            <FavoriteIcon onClick={() => removeFavorites(product.id)} />
          ) : (
            <FavoriteBorderIcon onClick={() => addFavorites(product.id)} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;

// style={{ width: "188px", height: "223px" }}
