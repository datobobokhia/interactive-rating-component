import styled from "styled-components";

export const StyledRateUs = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 1;

  img {
    background-color: #262e38;
    border-radius: 50%;
    padding: 15px;
  }

  h2 {
    font-size: 28px;
    line-height: 35px;
    margin: 0px;
    color: #ffffff;
    font-family: "Overpass";
    font-style: normal;
    font-weight: 700;
  }

  p {
    margin: 0px;
    font-family: "Overpass";
    font-style: normal;
    font-weight: 400;
    color: #969fad;
    font-size: 15px;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
      line-height: 22px;
    }
    h2 {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
