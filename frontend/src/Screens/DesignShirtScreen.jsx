import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ShirtDesignSelectionModal from "../Components/ShirtDesignSelectionModal";
import SideBarShirtDesign from "../Components/SideBarShirtDesign";
import SimpleShirt from "../Components/Svgs/Shirts/SimpleShirt";
import LongBottomShirt from "../Components/Svgs/Shirts/LongBottomShirt";
import { useSelector } from "react-redux";

const DesignShirtScreen = ({match}) => {
  const [shirtDesign, setShirtDesign] = useState({}); // Shirt Design State
  // const productId = match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
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
            <SideBarShirtDesign image={product.image}/>
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DesignShirtScreen;
