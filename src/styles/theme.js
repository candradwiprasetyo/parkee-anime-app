import { keyframes } from "styled-components";

export const jiggle = keyframes`
  0%   { transform: rotate(-3deg) translateX(0px); }
  20%  { transform: rotate(2deg) translateX(-2px); }
  40%  { transform: rotate(-2deg) translateX(2px); }
  60%  { transform: rotate(3deg) translateX(-1px); }
  80%  { transform: rotate(-1deg) translateX(1px); }
  100% { transform: rotate(0deg) translateX(0px); }
`;

export const theme = {
  colors: {
    background: "#fef6e4",
    primary: "#ca002a",
    secondary: "#2b2d42",
    border: "#333333",
    muted: "#2b2d42",
    card: "#fef6e4",
    hover: "#ffdd00",
    text: "#333333",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  radius: "16px",
  animations: {
    jiggle,
  },
};
