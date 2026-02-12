import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`;

export const Left = styled.div`
  flex: 0 0 30%;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 3;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding: 30px;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    overflow: visible;
    padding: 20px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
`;
