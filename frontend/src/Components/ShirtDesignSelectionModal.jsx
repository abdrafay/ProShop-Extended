import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ShirtDesignSelectionModal = ({setShirtDesign, shirtDesign}) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setShirtDesign({ ...shirtDesign, "style": value });
        // console.log(name, value)
    }
  return (
    <Modal
    size="lg"
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body className="startModal">
    <h5>Shirt Style Selection</h5>

    <p>Please Choose Shirt Style You Want Before We Begin</p>
          <div className='d-flex justify-content-center' onChange={handleRadioChange}>
            {/* <!-- Style Selection -- -- -- -- --- ---  --> */}
            <label className="DesignSelection DesignSelectionActive" htmlFor="ShirtStyleNormal">
              {/* <!-- <input  type="radio" name="inlineRadioOptions" className="radioSelection" value="option1"> --> */}
              <input type="radio" id="ShirtStyleNormal" className="radioSelection" value="ShirtStyleNormal"
                name="ShirtStyleSelection" />
              <div className="innerDesignSelection">
                <div className="designSelectionImage">
                  <img src="/images/FinalShirtSvg.svg" alt="" className="img-fluid" />
                </div>
                <div className="designSelectionContent mt-1 text-center">
                  <h6>Simple Shirt</h6>
                </div>

                <span className='checkmark'>&#10003;</span>
              </div>
            </label>
            {/* <!-- Style Selection -- -- -- -- --- ---  --> */}

            {/* <!-- Style Selection -- -- -- -- --- ---  --> */}
            <label className="DesignSelection DesignSelectionActive" htmlFor="ShirtStyleLongBottom">
              {/* <!-- <input  type="radio" name="inlineRadioOptions" className="radioSelection" value="option1"> --> */}
              <input type="radio" id="ShirtStyleLongBottom" className="radioSelection" value="ShirtStyleLongBottom"
                name="ShirtStyleSelection" />
              <div className="innerDesignSelection">
                <div className="designSelectionImage">
                  <img src="/images/LongBottomShirt.svg" alt="" className="img-fluid" />
                </div>
                <div className="designSelectionContent mt-1 text-center">
                  <h6>Long Bottom Shirt</h6>
                </div>
                <span className='checkmark'>&#10003;</span>
              </div>
            </label>
            {/* <!-- Style Selection -- -- -- -- --- ---  --> */}
          </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>Save</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ShirtDesignSelectionModal