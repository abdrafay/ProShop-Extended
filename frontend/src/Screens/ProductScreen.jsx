import React, { useState, useEffect } from "react";
import Rating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { listProductDetails } from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Layout from "../Components/Layout";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  const designPage = () => {
    history.push(`/design/${match.params.id}?qty=${qty}`);
  };
  return (
    <Layout>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              className="productImage"
              src={product.image}
              alt={product.name}
              fluid
            />
          </Col>
          <Col md={6}>
            <h3 style={{ paddingBottom: 5 }}>{product.name}</h3>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <Row>
              <Col>
                <h4>Price:</h4>
                <p>
                  <b>${product.price}</b>
                </p>
              </Col>
              <Col>
                <h4>Status:</h4>
                <p>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
              </Col>
            </Row>
            <h4>Quantity:</h4>
            <Form.Control
              as="select"
              value={qty}
              style={{ marginBottom: 10 }}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>

            <h4>Description</h4>
            <p>${product.description}</p>
            {product.category === "Fabric" ? (
              <Button
                className="btn-block"
                type="button"
                onClick={designPage}
                disabled={product.countInStock === 0}
              >
                Design A Shirt
              </Button>
            ) : (
              <Button
                className="btn-block"
                type="button"
                onClick={addToCartHandler}
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            )}
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default ProductScreen;
