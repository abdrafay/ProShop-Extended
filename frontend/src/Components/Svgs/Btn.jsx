import React from "react";

const Btn = ({ bgColor }) => {
  return (
    <svg
      id="Button1"
      className="btnColorChange"
      data-name="Button1"
      fill={bgColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 351 351"
    >
      <defs>
        <style>
          {`.Button-1-cls-1,
                                .Button-1-cls-3 {
                                  stroke: #000;
                                }

                                .Button-1-cls-1,
                                .Button-1-cls-2,
                                .Button-1-cls-3 {
                                  stroke-miterlimit: 10;
                                }

                                .Button-1-cls-2 {
                                  stroke: #fff;
                                }

                                .Button-1-cls-3 {
                                  fill: #fff;
                                }`}
        </style>
      </defs>
      <circle className="Button-1-cls-1" cx="175.5" cy="175.5" r="175" />
      <circle className="Button-1-cls-2" cx="174.03" cy="171.53" r="124.12" />
      <circle className="Button-1-cls-3" cx="143.53" cy="145.03" r="19" />
      <circle className="Button-1-cls-3" cx="143.53" cy="198.03" r="19" />
      <circle className="Button-1-cls-3" cx="204.53" cy="198.03" r="19" />
      <circle className="Button-1-cls-3" cx="204.53" cy="145.03" r="19" />
    </svg>
  );
};

export default Btn;
