import styled from "styled-components";

export const Item = styled.li`
  width: 220px;
  height: 320px;

  margin: 20px 10px;
  position: relative;
  cursor: default;

  /* border: 1px solid #e3e; */
  box-shadow: 0 0 10px 1px black;
  border-radius: 10px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 12px;
    margin: 3px 0;
    padding: 0;

    text-align: center;
  }

  .imageItem .datasProduct {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .datasProduct {
    padding: 5px;
  }

  .imageItem {
    width: 100px;
    height: 200px;

    background-color: aliceblue;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .price {
    background-color: lightgreen;
    padding: 3px;
  }
`;
