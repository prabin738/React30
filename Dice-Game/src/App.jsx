import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const [isGameStarted, setisGameStarted] = useState();

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
