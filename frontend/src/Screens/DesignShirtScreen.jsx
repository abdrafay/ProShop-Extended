import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ShirtDesignSelectionModal from "../Components/ShirtDesignSelectionModal";
import SideBarShirtDesign from "../Components/SideBarShirtDesign";
import SimpleShirt from "../Components/Svgs/Shirts/SimpleShirt";
import LongBottomShirt from "../Components/Svgs/Shirts/LongBottomShirt";

const DesignShirtScreen = () => {
  const [shirtDesign, setShirtDesign] = useState({}); // Shirt Design State
  useEffect(() => {
    console.log(shirtDesign);
  }, [shirtDesign]);
  return (
    <div>
      <ShirtDesignSelectionModal
        setShirtDesign={setShirtDesign}
        shirtDesign={shirtDesign}
      />
      <div>
        <Row className="m-0">
          <Col lg={3} className="p-relative">
            <SideBarShirtDesign />
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
                  <SimpleShirt />
                ) : (
                  <LongBottomShirt />
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
