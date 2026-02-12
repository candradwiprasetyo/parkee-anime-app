import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

function Loader() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}

export default Loader;
