import React, { useEffect, useState } from "react";

import { Button, Card, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Btn from "./Svgs/Btn";
import Cl1 from "./Svgs/collars/Cl1";
import Cl2 from "./Svgs/collars/Cl2";
import Cl3 from "./Svgs/collars/Cl3";
import Cl4 from "./Svgs/collars/Cl4";
import Cl5 from "./Svgs/collars/Cl5";
import Cl6 from "./Svgs/collars/Cl6";
import Cl7 from "./Svgs/collars/Cl7";
import Cl8 from "./Svgs/collars/Cl8";

import Cuff1 from "./Svgs/cuffs/Cuff1";
import Cuff2 from "./Svgs/cuffs/Cuff2";
import Cuff3 from "./Svgs/cuffs/Cuff3";
import Cuff4 from "./Svgs/cuffs/Cuff4";
import Cuff5 from "./Svgs/cuffs/Cuff5";
import Cuff6 from "./Svgs/cuffs/Cuff6";
import Cuff7 from "./Svgs/cuffs/Cuff7";
import Cuff8 from "./Svgs/cuffs/Cuff8";

const SideBarShirtDesign = () => {
  const colors = ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff"];
  const [bgColor, setBgColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setBgColor(color);
    let btn = document
      .querySelector(".shirt-design")
      .querySelectorAll(".btnColorChange");

    // convert btn to array
    btn = Array.from(btn);
    btn.forEach((element) => {
      element.style.fill = color;
    });
  };

  const handleBtnClone = (event) => {
    console.log(event.target);
    // clone the target and append it to the shirt-design div 6 times
    const target = event.target.querySelector("svg");
    const destination = document
      .querySelector(".shirt-design")
      .querySelector(".btns");
    // // console.log(collar.contains("svg"));
    if (destination.innerHTML === "") {
      //   // clone the target
      //   // clone 6 times
      for (let i = 0; i < 6; i++) {
        // create a div
        const div = document.createElement("div");
        div.classList.add("btnContainerInner");
        const clone = target.cloneNode(true);
        div.appendChild(clone);
        destination.appendChild(div);
      }
    }
  };

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
  const hnd = (event, elDivClass) => {
    // check if the target is present in .shirt-design div
    // if no then add the svg to the div
    const target = event.target.querySelector("svg");
    let destination = document
      .querySelector(".shirt-design")
      .querySelector(`.${elDivClass}`);
    // console.log(collar.contains("svg"));
    if (elDivClass === "cuffs") {
      destination = destination.querySelector(".cuffRow");
      if (destination.innerHTML === "") {
        // clone the target
        // clone 2 times

        const clone = target.cloneNode(true);
        const clone2 = target.cloneNode(true);
        // add a class to clone2
        clone2.classList.add("cuff2nd");
        destination.appendChild(clone);
        destination.appendChild(clone2);
      } else {
        // remove the target
        destination.innerHTML = "";
        // append the target
        const clone = target.cloneNode(true);
        const clone2 = target.cloneNode(true);
        // add a class to clone2
        clone2.classList.add("cuff2nd");
        destination.appendChild(clone);
        destination.appendChild(clone2);
      }
    } else {
      if (destination.innerHTML === "") {
        // clone the target
        const clone = target.cloneNode(true);
        destination.appendChild(clone);
      } else {
        // remove the target
        destination.innerHTML = "";
        // append the target
        const clone = target.cloneNode(true);
        destination.appendChild(clone);
      }
    }

    // save item to local storage and get it from there on refresh
    localStorage.setItem(elDivClass, destination.innerHTML);
  };
  useEffect(() => {
    // get the collar from local storage
    const collar = localStorage.getItem("collars");
    if (collar) {
      document.querySelector(".collars").innerHTML = collar;
    }
  }, []);
  return (
    <div className="shirtDesignerSideBar">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Collars
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
                          <div
                            className="cloneable-element"
                            onClick={(e) => hnd(e, "collars")}
                          >
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
              Cuffs
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row>
                {
                  // dynamicly render the cuffs
                  [Cuff1, Cuff2, Cuff3, Cuff4, Cuff5, Cuff6, Cuff7, Cuff8].map(
                    (Cuff, index) => {
                      return (
                        <Col lg={6} key={index}>
                          <div
                            className="cloneable-element cuffs-elems"
                            onClick={(e) => hnd(e, "cuffs")}
                          >
                            <Cuff />
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
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Buttons
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Row>
                {colors.map((color, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <div
                        style={{ backgroundColor: color }}
                        className="clr"
                        onClick={() => handleColorChange(color)}
                      ></div>
                    </Col>
                  );
                })}
              </Row>

              <div onClick={handleBtnClone} className="cloneable-element">
                <Btn bgColor={bgColor} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SideBarShirtDesign;
