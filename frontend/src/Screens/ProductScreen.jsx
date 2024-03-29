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
  Table,
} from "react-bootstrap";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Layout from "../Components/Layout";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("Small");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?size=${size}&qty=${qty}`);
  };

  const designPage = () => {
    history.push(`/design/${match.params.id}?size=${size}&qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
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
        <>
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
                  <p>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
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
              <h4>Size:</h4>
              <Form.Control
                as="select"
                value={size}
                style={{ marginBottom: 10 }}
                onChange={(e) => setSize(e.target.value)}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
                <option>XX-Large</option>
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
          <Row className="mt-4">
            <Col>
              <h2>The Normal Brand Size Chart</h2>
              <Table className="sizeChart table" width="100%">
                <thead>
                  <tr>
                    <td>Mens</td>
                    <td>Small</td>
                    <td>Medium</td>
                    <td>Large</td>
                    <td>X-Large</td>
                    <td>XX-Large</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Neck</td>
                    <td>14-14.5</td>
                    <td>15-15.5</td>
                    <td>16-16.5</td>
                    <td>17-17.5</td>
                    <td>18-18.5</td>
                  </tr>
                  <tr>
                    <td>Chest</td>
                    <td>35-37</td>
                    <td>38-40</td>
                    <td>41-43</td>
                    <td>44-46</td>
                    <td>47-49</td>
                  </tr>
                  <tr>
                    <td>Sleeve</td>
                    <td>32-33</td>
                    <td>33-34</td>
                    <td>34-35</td>
                    <td>35-36</td>
                    <td>36-36.5</td>
                  </tr>
                  <tr>
                    <td>Waist</td>
                    <td>29-31</td>
                    <td>32-34</td>
                    <td>35-37</td>
                    <td>38-40</td>
                    <td>41-43</td>
                  </tr>
                </tbody>
              </Table>
              {/* <p>
                <strong>Neck:</strong> Measure around the middle of your neck
                (at the Adam’s apple), keeping the tape a bit loose.
              </p>
              <p>
                <strong>Chest:</strong> Measure under your arms around the
                fullest part of your chest.
              </p>
              <p>
                <strong>Arm length:</strong> Bend your elbow 90 degrees and
                place your hand on your hip. Hold the tape at the center of the
                back of your neck. Measure across your shoulder to your elbow
                and down to your wrist. The total length is your sleeve length.
              </p>
              <p>
                <strong>Waist:</strong> Measure around your natural waistline,
                keeping the tape a bit loose.
              </p> */}
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Layout>
  );
};

export default ProductScreen;
