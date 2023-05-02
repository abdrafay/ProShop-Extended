import React, { useEffect } from "react";
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import { LinkContainer } from "react-router-bootstrap";
import Paginate from "../Components/Paginate";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  // Getting Products From Backend
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, pageNumber, keyword]);
  useEffect(() => {
    console.log(productList, "productLis");
  }, [products]);

  // useEffect(() => {
  //   let nav = document.querySelector("nav");
  //   let navHeight = nav.getBoundingClientRect().height;
  // }, []);

  return (
    <>
      <div id="LandingSection">
        <Container style={{ position: "relative", height: "100%" }}>
          <div
            className="LandingSection__content"
            style={{ backgroundImage: "url('/images/Banner.png')" }}
          >
            <div className="lnd_content">
              <h1>Buy The Best Products From Our Shop</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates
                quidem voluptatibus quos quia quas nesciunt. Quisquam, quibusdam
                voluptatibus. Quisquam, quibusdam voluptatibus. Quisquam,
                quibusdam voluptatibus.
              </p>
              <LinkContainer to="/login">
                <button className="btn btn-primary">Get Started</button>
              </LinkContainer>
            </div>
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
            <>
              <Row>
                {products.length > 0 &&
                  products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
              />
            </>
          )}
        </Container>
      </main>
    </>
  );
};

export default HomeScreen;
