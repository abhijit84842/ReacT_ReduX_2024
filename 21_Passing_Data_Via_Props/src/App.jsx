import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FoodList from "./Componenets/FoodList";
function App() {
  return (
    <>
      <center>
        <h1 className="bold">Protein Food Items List</h1>
        <FoodList></FoodList>
      </center>
    </>
  );
}

export default App;
