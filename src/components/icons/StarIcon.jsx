import styled from "styled-components";

const Svg = styled.svg`
  width: 70px;
  height: 70px;
  stroke: #fde047;
  position: absolute;
  left: 20%;
  fill: none;
  stroke-width: 3;
  animation: ${({ theme }) => theme.animations.jiggle} 2.5s steps(1) infinite;
`;

function StarIcon(props) {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M50,5 L61,40 L98,40 L68,62 L79,97 L50,75 L21,97 L32,62 L2,40 L39,40 Z"></path>
    </Svg>
  );
}

export default StarIcon;
