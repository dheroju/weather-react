import React from "react";
import Weather from "./Weather";

import "./Weather.css";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="App-header">Weather App</h1>
      <Weather />
      <small className="info">
        <a
          href="https://github.com/dheroju/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Open-source code</em>
        </a>{" "}
        ,by Aderoju Johnson
      </small>
    </div>
  );
}

export default App;
