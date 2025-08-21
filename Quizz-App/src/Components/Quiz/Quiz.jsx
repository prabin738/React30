import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  //create state variable
  let [index, setIndex] = useState(0);

  let [question, setQuesion] = useState(data[index]);

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>1. Which Device is required for the Internet Connection?</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 Questions</div>
    </div>
  );
};

export default Quiz;
