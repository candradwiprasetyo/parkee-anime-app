import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: 32px;
  grid-template-columns: repeat(5, 1fr);
  padding: 32px;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
