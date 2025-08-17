import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
