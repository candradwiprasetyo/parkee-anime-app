import styled from "styled-components";

const Svg = styled.svg`
  width: 60px;
  height: 60px;
  stroke: #6c8fe9;
  fill: none;
  position: absolute;
  right: 50px;
  top: 50px;
  stroke-width: 3;
  animation: ${({ theme }) => theme.animations.jiggle} 2.5s steps(1) infinite;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
`;

function LineIcon(props) {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M10,50 L30,20 L50,50 L70,20 L90,50" />
    </Svg>
  );
}

export default LineIcon;
