import React from "react";
import "./App.css";
import Board from "./Components/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Clock-header">World Clocks</h2>
        <Board />
      </header>
    </div>
  );
}

export default App;