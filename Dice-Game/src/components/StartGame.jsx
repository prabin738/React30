import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 18px;
  background: #000000;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1 px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
const Content = styled.div`
  h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;
