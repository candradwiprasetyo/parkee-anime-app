import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  box-sizing: border-box;
`;

const Message = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

function EmptyState({ message }) {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
}

export default EmptyState;
