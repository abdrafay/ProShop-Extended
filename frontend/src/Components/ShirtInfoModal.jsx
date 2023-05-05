import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const ShirtInfoModal = ({ shirtDetails, showMD, setShowMD }) => {
  const handle = () => setShowMD(!showMD);

  useEffect(() => {
    console.log("ShirtInfoModal.jsx: ", shirtDetails);
  }, [shirtDetails]);

  return (
    <Modal
      size="lg"
      show={showMD}
      onHide={handle}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Shirt Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span style={{ fontWeight: 700 }}>Shirt Style:</span>{" "}
          {shirtDetails.style}
        </p>
        <p>
          <span style={{ fontWeight: 700 }}>Collar:</span> {shirtDetails.collar}
        </p>
        <p>
          <span style={{ fontWeight: 700 }}>Cuffs:</span>
          {shirtDetails.cuffs}
        </p>
        <p>
          <span style={{ fontWeight: 700 }}>Buttons:</span>{" "}
          {shirtDetails.buttonColor}
        </p>
        {/* <p>Shirt Design Color: {shirtDetails.shirtDesignColor}</p> */}
        {/* <p>Shirt Design Size: {shirtDetails.shirtDesignSize}</p> */}
      </Modal.Body>
    </Modal>
  );
};

export default ShirtInfoModal;
