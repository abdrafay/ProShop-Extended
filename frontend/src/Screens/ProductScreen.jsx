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
            <h3>{product.name}</h3>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <h4>Price:</h4>
            <p>
              <b>${product.price}</b>
            </p>
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
             ) :  <Button
             className="btn-block"
             type="button"
             onClick={addToCartHandler}
             disabled={product.countInStock === 0}
           >
             Add To Cart
           </Button>}
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  {/* Button to Going to Cart Page and then adding to Cart */}
                  {/* <Button
                    className="btn-block"
                    type="button"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button> */}
                  {/* Button to Going to Design Page and then adding to Cart */}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default ProductScreen;
