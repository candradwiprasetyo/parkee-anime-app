import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  color: black;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  padding: 20px 0;
`;

export const Logo = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 5px;
  color: white;
  display: inline-block;
  animation: ${({ theme }) => theme.animations.jiggle} 3s steps(1) infinite;
  image-rendering: pixelated;
  font-smooth: never;
  -webkit-font-smoothing: none;
`;
