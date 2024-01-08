import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FoodList from "./Componenets/FoodList";
import ErrorMsg from "./Componenets/ErrorMsg";
import "./Style.css";
function App() {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];
  return (
    <>
      <center>
        <h1 className="food-heading">Protein Food Items List</h1>
        <FoodList items={foodItems}></FoodList>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </center>
    </>
  );
}

export default App;
