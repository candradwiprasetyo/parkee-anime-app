import styled from "styled-components";

const StyledBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ textColor }) => textColor || "#fff"};
  background: ${({ bgColor }) => bgColor || "#000"};
  border: 2px solid black;
  border-radius: ${({ theme }) => theme.radius};
  text-transform: uppercase;
  white-space: nowrap;
  position: absolute;
  top: 10px;
  right: -16px;
  z-index: 10;
  transform: rotate(5deg);

  @media (max-width: 768px) {
    right: 16px;
  }
`;

function Badge({ children, value }) {
  let bgColor = "#333";
  let textColor = "#fff";
  let borderColor = "#333";

  if (value >= 90) {
    bgColor = "#4caf50";
    textColor = "#fff";
    borderColor = "#388e3c";
  } else if (value >= 80) {
    bgColor = "#ffeb3b";
    textColor = "#333";
    borderColor = "#fbc02d";
  } else if (value >= 70) {
    bgColor = "#ff9800";
    textColor = "#fff";
    borderColor = "#f57c00";
  } else {
    bgColor = "#f44336";
    textColor = "#fff";
    borderColor = "#d32f2f";
  }

  return (
    <StyledBadge
      bgColor={bgColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      {children}
    </StyledBadge>
  );
}

export default Badge;
