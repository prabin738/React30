import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game?</h2>
      <p>Select any Number</p>
      <p>Click on the dice image</p>
      <p>
        After click on the dice if selected number is equal to dice number you
        will get same point as dice
      </p>
      <p>If you get wrong guess then 2 point will be dedcuted</p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #f7d1d1;
  padding: 20px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
`;
