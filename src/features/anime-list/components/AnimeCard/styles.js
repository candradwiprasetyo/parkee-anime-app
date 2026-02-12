import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background: white;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
  box-shadow: 4px 4px 0 #bbb;
  corner-shape: squircle;
  position: relative;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #bbb;
  }
`;

export const Poster = styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  image-rendering: pixelated;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
  padding: 16px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 10px;
  margin: 4px 0 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.card};
`;
