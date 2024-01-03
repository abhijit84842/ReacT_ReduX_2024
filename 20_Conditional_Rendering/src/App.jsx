import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  var foodItems = [];
  /*let foodItems = [
    "Dall",
    "Green Vegitable",
    "Roti",
    "Milk",
    "Salad",
    "Ghee",
    "Banana",
  ];
*/

  return (
    <>
      <center>
        <h1>Healthy Food List..</h1>
        {foodItems.length === 0 ? <h3>I am hungry</h3> : null}

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
