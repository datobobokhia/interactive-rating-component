import styled from "styled-components";

export const StyledScoresBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  button {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #262e38;
    color: #7c8798;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #7c8798;
    color: #ffffff;
  }

  button:focus {
    background-color: #fc7614;
    color: #ffffff;
  }

  @media (max-width: 600px) {
    button {
      width: 42px;
      height: 42px;
      cursor: default;
    }
  }
`;
