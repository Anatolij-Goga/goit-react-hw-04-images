import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
`;

const RotatingLinesContainer = styled.div`
  z-index: 1200;
`;

export { Overlay, RotatingLinesContainer };
