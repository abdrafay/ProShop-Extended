import React from "react";

const Cuff2 = ({ image }) => {
  return (
    <svg
      id="CuffDesign2"
      data-name="CuffDesign2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="50 120 390.71 299.28"
    >
      <defs>
        <style>
          {`.CuffDesign2-cls-1,
                                    .CuffDesign2-cls-3 {
                                      fill: none;
                                    }

                                    .CuffDesign2-cls-1,
                                    .CuffDesign2-cls-3,
                                    .CuffDesign2-cls-4 {
                                      stroke: #000;
                                      stroke-width: 1%;
                                      stroke-miterlimit: 10;
                                    }

                                    .CuffDesign2-cls-2 {
                                      clip-path: url(#CuffDesign2-clip-path);
                                    }

                                    .CuffDesign2-cls-3 {
                                      stroke-width: 2px;
                                    }

                                    .CuffDesign2-cls-4 {
                                      fill: #fff;
                                    }`}
        </style>
        <clipPath
          id="CuffDesign2-clip-path"
          transform="translate(67.28 151.83)"
        >
          <path
            className="CuffDesign2-cls-1"
            d="M3.87,210s218.81-46.88,343.85,0V38S191.43-24.49,3.87,38Z"
          />
        </clipPath>
      </defs>
      <g className="CuffDesign2-cls-2">
        <image
          width="768"
          height="1024"
          transform="translate(0 0) scale(1.8)"
          xlinkHref={image}
        />
      </g>
      <path
        className="CuffDesign2-cls-1"
        d="M3.87,210s218.81-46.88,343.85,0V38S191.43-24.49,3.87,38Z"
        transform="translate(67.28 151.83)"
      />
      <path
        id="CuffLine"
        className="CuffDesign2-cls-3"
        d="M156,190.49s66.7,3.83,66.7-43.05V11.11"
        transform="translate(67.28 151.83)"
      />
      <circle
        id="CuffBtnCircle"
        className="CuffDesign2-cls-4 btnColorChange"
        cx="219.63"
        cy="260.19"
        r="23.44"
      />
      <path
        id="CuffStyle2Path"
        className="CuffDesign2-cls-1"
        d="M343.22,208.33c12,4,0,12,0,12-140,42-339,0-339,0s-4-4,0-10"
        transform="translate(67.28 151.83)"
      />
    </svg>
  );
};

export default Cuff2;
