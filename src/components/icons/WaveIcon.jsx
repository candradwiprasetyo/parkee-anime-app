import styled from "styled-components";

const Svg = styled.svg`
  width: 80px;
  height: 80px;
  stroke: #6c8fe9;
  fill: none;
  position: absolute;
  right: 50px;
  top: 50px;
  stroke-width: 3;
  animation: ${({ theme }) => theme.animations.jiggle} 2.5s steps(1) infinite;
`;

function WaveIcon(props) {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M10,30 Q30,10 50,30 T90,30"></path>
    </Svg>
  );
}

export default WaveIcon;
