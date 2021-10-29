import styled from "styled-components";

export const ButtonDel = styled.button`
  background-color: lightcoral;
  border: 1px solid #e3e;
  width: 70%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: #e3e3e3;
  }
`;

export const BoxDel = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  position: absolute;
  bottom: -15px;
`;
