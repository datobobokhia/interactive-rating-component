import styled from "styled-components";

export const StyledMainContent = styled.main`
  max-width: 412px;
  height: 416px;
  background-color: #202731;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    max-width: 340px;
    height: 360px;
  }
`;
