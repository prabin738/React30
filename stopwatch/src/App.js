import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        <span>{"0" + Math.floor((time / 60000) % 60)};</span>
      </div>
    </>
  );
}

export default App;
