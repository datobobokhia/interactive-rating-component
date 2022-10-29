import { StyledThankYou } from "../styles/ThankYou.styled";

export default function ThankYou({ score }) {
  return (
    <StyledThankYou>
      <img src="/assets/photo/illustration-thank-you.svg" alt="Thank You" />
      <p
        style={{
          color: "#FC7614",
          padding: "12px 20px",
          backgroundColor: "#262e38",
          borderRadius: "25px",
        }}
      >
        You selected {score} out of 5
      </p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </StyledThankYou>
  );
}
