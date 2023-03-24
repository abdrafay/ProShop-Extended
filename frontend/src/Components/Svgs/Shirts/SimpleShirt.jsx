import React from "react";

const SimpleShirt = ({ image }) => {
  return (
    <svg
      id="SimpleShirt"
      className="ShirtSvg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 445.62 431.9"
    >
      <defs>
        <style>
          {` .MainShirt-cls-1 {
                    fill: none;
                    stroke: #000;
                    stroke-miterlimit: 10;
                  }

                  .MainShirt-cls-2 {
                    clip-path: url(#MainShirt-clip-path);
                  }

                  .MainShirt-cls-3 {
                    clip-path: url(#MainShirt-clip-path-2);
                  }

                  .MainShirt-cls-4 {
                    clip-path: url(#MainShirt-clip-path-3);
                  }

                  .MainShirt-cls-5 {
                    clip-path: url(#MainShirt-clip-path-4);
                  }`}
        </style>
        <clipPath id="MainShirt-clip-path" transform="translate(48)">
          <path
            id="MainBackStroke"
            className="MainShirt-cls-1"
            d="M55.7,45.39s27.19,98.87,24.72,113.7c0,0,9.27,105.67-6.8,221.84,0,0,91.46,35.84,202.69,0,0,0-13.6-187.85-6.18-215,0,0,6.18-72.92,24.72-119.88C294.85,46,183.62-24.43,55.7,45.39Z"
          />
        </clipPath>
        <clipPath id="MainShirt-clip-path-2" transform="translate(48)">
          <rect
            className="MainShirt-cls-1"
            x="167.55"
            y="15.11"
            width="12.36"
            height="381.89"
          />
        </clipPath>
        <clipPath id="MainShirt-clip-path-3" transform="translate(48)">
          <path
            id="Sleeve2Stroke"
            className="MainShirt-cls-1"
            d="M15.54,345.09S-3,167.13,55.09,46c0,0,21,53.14,24.71,113.7,0,0-30.89,139.66-28.42,185.38C51.38,345.09,32.84,352.51,15.54,345.09Z"
          />
        </clipPath>
        <clipPath id="MainShirt-clip-path-4" transform="translate(48)">
          <path
            id="Sleeve1Stroke"
            className="MainShirt-cls-1"
            d="M334.08,345.09s18.54-178-39.55-299.08c0,0-21,53.14-24.72,113.7,0,0,30.9,139.66,28.43,185.38C298.24,345.09,316.78,352.51,334.08,345.09Z"
          />
        </clipPath>
        <image
          id="MainShirt-image"
          width="768"
          height="1024"
          xlinkHref={image}
        />
      </defs>
      <g id="WholeShirtGroup">
        <g id="MainBack">
          <g id="MainBackClipped">
            <g className="MainShirt-cls-2">
              <use
                id="MainBackClippedImage"
                transform="translate(61) scale(0.42)"
                xlinkHref="#MainShirt-image"
              />
            </g>
            <path
              id="MainBackStroke-2"
              data-name="MainBackStroke"
              className="MainShirt-cls-1"
              d="M55.7,45.39s27.19,98.87,24.72,113.7c0,0,9.27,105.67-6.8,221.84,0,0,91.46,35.84,202.69,0,0,0-13.6-187.85-6.18-215,0,0,6.18-72.92,24.72-119.88C294.85,46,183.62-24.43,55.7,45.39Z"
              transform="translate(48)"
            />
          </g>
        </g>
        <g id="Strip">
          <g className="MainShirt-cls-3">
            <use
              id="ClippedStrokeImage"
              transform="translate(39 15) scale(0.37)"
              xlinkHref="#MainShirt-image"
            />
          </g>
          <rect
            className="MainShirt-cls-1"
            x="215.55"
            y="15.11"
            width="12.36"
            height="381.89"
          />
        </g>
        <g id="Sleeves">
          <g id="Sleeve2">
            <g className="MainShirt-cls-4">
              <use
                id="Sleeve2ClippedImage"
                transform="translate(-48 46) scale(0.33)"
                xlinkHref="#MainShirt-image"
              />
            </g>
            <path
              id="Sleeve2Stroke-2"
              data-name="Sleeve2Stroke"
              className="MainShirt-cls-1"
              d="M15.54,345.09S-3,167.13,55.09,46c0,0,21,53.14,24.71,113.7,0,0-30.89,139.66-28.42,185.38C51.38,345.09,32.84,352.51,15.54,345.09Z"
              transform="translate(48)"
            />
          </g>
          <g id="Sleeve1">
            <g className="MainShirt-cls-5">
              <use
                id="Sleeve1ClippedImage"
                transform="matrix(-0.33, 0, 0, 0.33, 397.62, 46)"
                xlinkHref="#MainShirt-image"
              />
            </g>
            <path
              id="Sleeve1Stroke-2"
              data-name="Sleeve1Stroke"
              className="MainShirt-cls-1"
              d="M334.08,345.09s18.54-178-39.55-299.08c0,0-21,53.14-24.72,113.7,0,0,30.9,139.66,28.43,185.38C298.24,345.09,316.78,352.51,334.08,345.09Z"
              transform="translate(48)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SimpleShirt;
