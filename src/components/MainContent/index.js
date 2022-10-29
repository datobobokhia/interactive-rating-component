import { StyledMainContent } from "../styles/MainContent.styled";
import RateUs from "./RateUs";
import ThankYou from "./ThankYou";
import { useState } from "react";

export default function MainContent() {
  const [button, setButton] = useState(false);
  const [score, setScore] = useState(0);

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <StyledMainContent>
      {button ? (
        <ThankYou score={score} />
      ) : (
        <RateUs setButton={setButton} handleScoreChange={handleScoreChange} />
      )}
    </StyledMainContent>
  );
}
