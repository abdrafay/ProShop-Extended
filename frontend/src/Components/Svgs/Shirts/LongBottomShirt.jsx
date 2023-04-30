import React from "react";

const LongBottomShirt = ({ image }) => {
  return (
    <svg
      id="LongBottomShirtDesign"
      className="ShirtSvg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 445.62 431.9"
    >
      <defs>
        <style>
          {`.LongBottom-cls-1 {
                    fill: none;
                    stroke: #000;
                    stroke-miterlimit: 10;
                  }

                  .LongBottom-cls-2 {
                    clip-path: url(#LongBottom-clip-path);
                  }

                  .LongBottom-cls-3 {
                    clip-path: url(#LongBottom-clip-path-2);
                  }

                  .LongBottom-cls-4 {
                    clip-path: url(#LongBottom-clip-path-3);
                  }

                  .LongBottom-cls-5 {
                    clip-path: url(#LongBottom-clip-path-4);
                  }`}
        </style>
        <clipPath id="LongBottom-clip-path" transform="translate(48.13 10.3)">
          <path
            id="MainBackStroke"
            className="LongBottom-cls-1"
            d="M55.57,35.09S82.76,134,80.29,148.79c0,0,9.27,105.67-6.8,221.84,0,0,94,93.87,202.69,0,0,0-13.6-187.85-6.18-215,0,0,6.18-72.92,24.71-119.88C294.71,35.71,183.48-34.73,55.57,35.09Z"
          />
        </clipPath>
        <clipPath id="LongBottom-clip-path-2" transform="translate(48.13 10.3)">
          <rect
            className="cls-1"
            x="167.42"
            y="4.81"
            width="12.58"
            height="407.19"
          />
        </clipPath>
        <clipPath id="LongBottom-clip-path-3" transform="translate(48.13 10.3)">
          <path
            id="Sleeve2Stroke"
            className="cls-1"
            d="M15.41,334.79S-3.13,156.83,55,35.71c0,0,21,53.14,24.72,113.7,0,0-30.9,139.66-28.42,185.38C51.25,334.79,32.71,342.21,15.41,334.79Z"
          />
        </clipPath>
        <clipPath id="LongBottom-clip-path-4" transform="translate(48.13 10.3)">
          <path
            id="Sleeve1Stroke"
            className="cls-1"
            d="M334,334.79s18.53-178-39.55-299.08c0,0-21,53.14-24.72,113.7,0,0,30.9,139.66,28.43,185.38C298.11,334.79,316.64,342.21,334,334.79Z"
          />
        </clipPath>
        <image
          id="LongBottom-image"
          width="768"
          height="1024"
          xlinkHref={image}
        />
      </defs>
      <g id="LongBottomShirt">
        <g id="MainBackLongBottom">
          <g id="MainBackClipped">
            <g className="LongBottom-cls-2">
              <use
                id="MainBackClippedImage"
                transform="translate(61) scale(0.42)"
                xlinkHref="#LongBottom-image"
              />
            </g>
            <path
              id="MainBackStroke-2"
              data-name="MainBackStroke"
              className="LongBottom-cls-1"
              d="M55.57,35.09S82.76,134,80.29,148.79c0,0,9.27,105.67-6.8,221.84,0,0,94,93.87,202.69,0,0,0-13.6-187.85-6.18-215,0,0,6.18-72.92,24.71-119.88C294.71,35.71,183.48-34.73,55.57,35.09Z"
              transform="translate(48.13 10.3)"
            />
          </g>
        </g>
        <g id="LongBottom-Strip">
          <g className="LongBottom-cls-3">
            <use
              id="ClippedStrokeImage"
              transform="translate(36.55 4.69) scale(0.38 0.4)"
              xlinkHref="#LongBottom-image"
            />
          </g>
          <rect
            className="LongBottom-cls-1"
            x="215.55"
            y="15.11"
            width="12.58"
            height="407.19"
          />
        </g>
        <g id="LongBottom-Sleeves">
          <g id="LongBottom-Sleeve2">
            <g className="LongBottom-cls-4">
              <use
                id="LongBottom-Sleeve2ClippedImage"
                transform="translate(-48.13 35.7) scale(0.33)"
                xlinkHref="#LongBottom-image"
              />
            </g>
            <path
              id="LongBottom-Sleeve2Stroke-2"
              data-name="Sleeve2Stroke"
              className="LongBottom-cls-1"
              d="M15.41,334.79S-3.13,156.83,55,35.71c0,0,21,53.14,24.72,113.7,0,0-30.9,139.66-28.42,185.38C51.25,334.79,32.71,342.21,15.41,334.79Z"
              transform="translate(48.13 10.3)"
            />
          </g>
          <g id="LongBottom-Sleeve1">
            <g className="LongBottom-cls-5">
              <use
                id="LongBottom-Sleeve1ClippedImage"
                transform="matrix(-0.33, 0, 0, 0.33, 397.48, 35.7)"
                xlinkHref="#LongBottom-image"
              />
            </g>
            <path
              id="LongBottom-Sleeve1Stroke-2"
              data-name="Sleeve1Stroke"
              className="LongBottom-cls-1"
              d="M334,334.79s18.53-178-39.55-299.08c0,0-21,53.14-24.72,113.7,0,0,30.9,139.66,28.43,185.38C298.11,334.79,316.64,342.21,334,334.79Z"
              transform="translate(48.13 10.3)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LongBottomShirt;
