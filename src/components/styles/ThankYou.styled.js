import styled from "styled-components";

export const StyledThankYou = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    text-align: center;
    font-family: "Overpass";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #969fad;
    margin: 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  h2 {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    margin: 0px;
  }

  @media (max-width: 600px) {
    height: 90%;
  }
`;
