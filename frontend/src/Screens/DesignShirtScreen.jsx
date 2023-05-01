import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ShirtDesignSelectionModal from "../Components/ShirtDesignSelectionModal";
import SideBarShirtDesign from "../Components/SideBarShirtDesign";
import SimpleShirt from "../Components/Svgs/Shirts/SimpleShirt";
import LongBottomShirt from "../Components/Svgs/Shirts/LongBottomShirt";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

const DesignShirtScreen = ({ match, history, location }) => {
  const [shirtDesign, setShirtDesign] = useState({}); // Shirt Design State
  const dispatch = useDispatch();
  // const productId = match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const shirtDesignHandler = () => {
    localStorage.setItem("shirt-design-info", JSON.stringify(shirtDesign));
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  useEffect(() => {
    console.log(shirtDesign);
  }, [shirtDesign]);

  return (
    <div>
      <ShirtDesignSelectionModal
        setShirtDesign={setShirtDesign}
        shirtDesign={shirtDesign}
        image={product.image}
      />
      <div>
        <Row className="m-0">
          <Col lg={3} className="p-relative">
            <SideBarShirtDesign
              shirtDesign={shirtDesign}
              setShirtDesign={setShirtDesign}
              image={product.image}
            />
          </Col>
          <Col
            lg={9}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "700px" }}
          >
            <div className="d-flex justify-content-center align-items-center shirt-design">
              <div className="collars"></div>
              <div className="cuffs">
                <div className="d-flex cuffRow justify-content-center align-items-center"></div>
              </div>
              <div className="btns"></div>
              {shirtDesign.style ? (
                shirtDesign.style === "ShirtStyleNormal" ? (
                  <SimpleShirt image={product.image} />
                ) : (
                  <LongBottomShirt image={product.image} />
                )
              ) : (
                ""
              )}
            </div>
            <div onClick={shirtDesignHandler} className="btn-ps-top">
              <Button>Save</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DesignShirtScreen;
