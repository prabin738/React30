import "./App.css";

let name = "Prabin";

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name} </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorum
          animi aliquid, nemo eius porro hic exercitationem vitae maiores quis
          unde, libero dolore assumenda. Voluptatem cupiditate dolor soluta
          itaque tenetur.
        </p>
      </div>
    </>
  );
}

export default App;
