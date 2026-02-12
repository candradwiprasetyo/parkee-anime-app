import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #000;
  box-shadow: 3px 3px 0 #ccc;
  background: white;
  position: relative;
  color: black;

  @media (max-width: 1024px) {
    margin: 0 16px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 16px 16px;
  border: none;
  width: 100%;
  outline: none;
  font-size: 18px;
  background: transparent;
  color: black;
  font-weight: bold;
  font-family: "Press Start 2P", monospace;
`;

export const ClearButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  padding: 12px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease;
  color: white;
  font-weight: bold;
`;
