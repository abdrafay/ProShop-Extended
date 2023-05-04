import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ShirtInfoModal = ({ shirtDetails, showMD, setShowMD }) => {
  const handle = () => setShowMD(!showMD);

  return (
    <Modal
      size="lg"
      show={showMD}
      onHide={handle}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Shirt Details</h5>
        <p>Shirt Style: {shirtDetails.shirtStyle}</p>
        {/* <p>Shirt Color: {shirtDetails.shirtColor}</p> */}
        {/* <p>Shirt Size: {shirtDetails.shirtSize}</p> */}
        {/* <p>Shirt Design: {shirtDetails.shirtDesign}</p> */}
        {/* <p>Shirt Design Color: {shirtDetails.shirtDesignColor}</p> */}
        {/* <p>Shirt Design Size: {shirtDetails.shirtDesignSize}</p> */}
      </Modal.Body>
    </Modal>
  );
};

export default ShirtInfoModal;
