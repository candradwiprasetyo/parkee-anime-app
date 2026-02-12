import styled from "styled-components";

const Svg = styled.svg`
  width: 80px;
  height: 80px;
  position: absolute;
  right: 80px;
  bottom: 80px;
  animation: ${({ theme }) => theme.animations.jiggle} 4s steps(1) infinite;
`;

function CircleIcon(props) {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="#43e47e"
        strokeWidth="4"
      />
    </Svg>
  );
}

export default CircleIcon;
