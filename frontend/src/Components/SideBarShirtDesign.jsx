import React, { useEffect } from "react";

import { Button, Card, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
// import Logo from "../logo.svg";
import { ReactComponent as Logo } from "../svgs/logo.svg";
import Cl1 from "./Svgs/collars/Cl1";
import Cl2 from "./Svgs/collars/Cl2";
import Cl3 from "./Svgs/collars/Cl3";
import Cl4 from "./Svgs/collars/Cl4";
import Cl5 from "./Svgs/collars/Cl5";
import Cl6 from "./Svgs/collars/Cl6";
import Cl7 from "./Svgs/collars/Cl7";
import Cl8 from "./Svgs/collars/Cl8";

const SideBarShirtDesign = () => {
  // get the height of the menu
  useEffect(() => {
    const menuHeight = document.querySelector(".navbar")
      ? document.querySelector(".navbar").clientHeight
      : 0;
    console.log(menuHeight);
    document.querySelector(
      ".shirtDesignerSideBar"
    ).style.top = `${menuHeight}px`;
  }, []);
  const hnd = (e) => {
    // check if the target is present in .shirt-design div
    // if no then add the svg to the div
    const target = e.target;
    console.log(target);
    // if (!document.querySelector(".shirt-design").contains(e.target)) {
    //   document.querySelector(".shirt-design").appendChild(e.target);
    // }
  };
  return (
    <div className="shirtDesignerSideBar">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row>
                {
                  // dynamicly render the collars
                  [Cl1, Cl2, Cl3, Cl4, Cl5, Cl6, Cl7, Cl8].map(
                    (Collar, index) => {
                      return (
                        <Col lg={6} key={index}>
                          <div onClick={hnd}>
                            <Collar />
                          </div>
                        </Col>
                      );
                    }
                  )
                }
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SideBarShirtDesign;
