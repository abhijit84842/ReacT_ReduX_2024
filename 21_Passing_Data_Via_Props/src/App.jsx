import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];

  return (
    <>
      <center>
        <h1 className="bold">Protein Food Items List</h1>
        <ul class="list-group">
          {foodItems.map((items) => (
            <li class="list-group-item">{items}</li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default App;
