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

        <ul class="list-group">
          {foodItems.map((list) => (
            <li class="list-group-item">{list}</li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default App;
