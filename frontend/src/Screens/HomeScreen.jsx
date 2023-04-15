import React, { useEffect } from "react";
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  // Getting Products From Backend
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  useEffect(() => {
    let nav = document.querySelector("nav");
    let navHeight = nav.getBoundingClientRect().height;
    let lndSec = document.querySelector(".LandingSection__content");
    lndSec.style.height = `calc(100vh - ${navHeight}px)`;
  }, []);

  return (
    <>
      <div
        className="LandingSection__content"
        style={{ backgroundImage: "url('/images/Banner.png')" }}
      >
        <Container style={{ position: "relative", height: "100%" }}>
          <div className="lnd_content">
            <h1>Buy The Best Products From Our Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem
              voluptatibus quos quia quas nesciunt. Quisquam, quibusdam
              voluptatibus. Quisquam, quibusdam voluptatibus. Quisquam,
              quibusdam voluptatibus.
            </p>
            <LinkContainer to="/login">
              <button className="btn btn-primary">Get Started</button>
            </LinkContainer>
          </div>
        </Container>
      </div>
      <main className="py-5">
        <Container>
          <h1>Latest Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
    </>
  );
};

export default HomeScreen;
