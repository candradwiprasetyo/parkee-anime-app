import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 40px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  flex: 0 0 30%;
  height: 100%;
  position: relative;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
`;
