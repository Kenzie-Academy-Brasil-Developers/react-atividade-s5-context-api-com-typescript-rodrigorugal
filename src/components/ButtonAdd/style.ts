import styled from "styled-components";

export const BoxButton = styled.button`
  background-color: lightcoral;
  border: 1px solid #e3e;
  width: 70%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  position: absolute;
  bottom: -15px;
`;
