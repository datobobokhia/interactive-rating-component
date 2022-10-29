import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  width: 100%;
  background-color: #fc7614;
  border-radius: 22.5px;
  height: 45px;
  border: none;
  font-family: "Overpass", sans-serif;
  font-style: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
    color: #fc7614;
  }
  @media (max-width: 600px) {
    :hover {
      background-color: #fc7614;
      color: #ffffff;
    }
    cursor: default;
    font-size: 14px;
    line-height: 18px;
  }
`;
