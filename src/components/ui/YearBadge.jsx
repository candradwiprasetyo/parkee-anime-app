import styled from "styled-components";

const StyledYear = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 8px;
  color: ${({ theme }) => theme.colors.card};
  background: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-left: 4px;
  text-shadow: none;
`;

function YearBadge({ startDate }) {
  if (!startDate) return null;
  const year = new Date(startDate).getFullYear();
  return <StyledYear>{year}</StyledYear>;
}

export default YearBadge;
