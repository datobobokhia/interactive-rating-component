import { StyledRateUs } from "../styles/RateUs.styled";
import { StyledSubmitButton } from "../styles/SubmutButton.styled";
import { StyledScoresBox } from "../styles/ScoresBox.styled";

export default function RateUs({ setButton, handleScoreChange }) {
  const scores = [1, 2, 3, 4, 5];

  return (
    <StyledRateUs>
      <img src="/assets/photo/icon-star.svg" alt="yellow star" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <StyledScoresBox>
        {scores.map((score, index) => {
          return (
            <button key={index} onClick={handleScoreChange} value={score}>
              {score}
            </button>
          );
        })}
      </StyledScoresBox>
      <StyledSubmitButton
        onClick={() => {
          setButton(true);
        }}
      >
        Submit
      </StyledSubmitButton>
    </StyledRateUs>
  );
}
