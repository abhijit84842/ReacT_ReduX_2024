import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [
    "Dall",
    "Green Vegitable",
    "Roti",
    "Milk",
    "Salad",
    "Ghee",
    "Banana",
  ];
  return (
    <>
      <center>
        <h1>Healthy Food List..</h1>

        <ul className="list-group">
          {foodItems.map((list) => (
            <li key={list} className="list-group-item">
              {list}
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default App;
