interface Props {
  fill: string;
}

function SportsCarSvg({ fill }: Props) {
  return (
    <svg
      width="448"
      height="147"
      viewBox="0 0 448 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_147_38)">
        <path
          d="M424.024 26.4232C380.166 17.0665 236.454 -5.3674 205.666 1.17121C169.268 9.59383 16.2313 64.7366 15.2988 65.6707C11.5689 67.5389 2.22833 71.2753 3.16081 81.566C4.09328 89.0387 4.09328 95.5932 1.29585 102.132C-0.569102 106.802 -0.569102 111.473 2.22833 115.225C6.89072 122.698 19.0287 126.45 25.5561 126.45H58.2244C56.3594 120.845 55.4269 114.291 55.4269 107.752C55.4269 75.0274 81.5521 48.8572 114.22 48.8572C146.889 48.8572 173.014 75.0274 173.014 107.752C173.014 114.291 172.081 120.845 170.216 126.45H307.385C305.521 120.845 304.588 114.291 304.588 107.752C304.588 75.0274 330.713 48.8572 363.382 48.8572C396.05 48.8572 422.175 75.0274 422.175 107.752C424.972 106.818 426.837 104.95 428.702 104.016C435.23 101.214 439.908 95.609 442.705 89.0546C452.963 61.9502 449.233 32.0278 424.04 26.4232H424.024ZM143.143 40.4345C173.931 30.1596 201.004 21.737 209.396 19.8688C217.789 18.0006 242.065 19.8688 271.92 22.671C247.66 35.7641 200.072 53.5118 143.143 40.4345Z"
          fill={fill}
        />
        <path
          d="M363.366 147C385.528 147 403.494 129.003 403.494 106.803C403.494 84.6025 385.528 66.6055 363.366 66.6055C341.204 66.6055 323.238 84.6025 323.238 106.803C323.238 129.003 341.204 147 363.366 147Z"
          fill={fill}
        />
        <path
          d="M114.22 147C136.383 147 154.349 129.003 154.349 106.803C154.349 84.6025 136.383 66.6055 114.22 66.6055C92.0583 66.6055 74.0923 84.6025 74.0923 106.803C74.0923 129.003 92.0583 147 114.22 147Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_147_38">
          <rect width="448" height="147" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SportsCarSvg;
