import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center>
        <h1>Healthy Food List..</h1>
        <ul class="list-group">
          <li class="list-group-item">Dal</li>
          <li class="list-group-item">Green Vegitable</li>
          <li class="list-group-item">Roti</li>
          <li class="list-group-item">Milk</li>
          <li class="list-group-item">Salad</li>
        </ul>
      </center>
    </>
  );
}

export default App;
