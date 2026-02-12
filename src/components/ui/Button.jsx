import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 16px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;
  border: 3px solid black;
  box-shadow: 4px 4px 0 #bbb;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function Button({ children, onClick, type = "button", ...props }) {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
