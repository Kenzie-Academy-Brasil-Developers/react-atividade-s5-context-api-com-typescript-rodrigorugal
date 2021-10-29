import styled from "styled-components";

export const FullScreen = styled.main`
  width: 80vw;
  height: 100vh;

  padding: 2px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "L R";
`;

export const Left = styled.section`
  grid-area: L;

  overflow: auto;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled(Left)`
  grid-area: R;
`;
