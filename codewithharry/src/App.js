import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [darkMode, setMode] = useState(false); //let me know wheather dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" mode={Mode} aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter your text here" />
        <About />
      </div>
    </>
  );
}

export default App;
