import FoodList from "./Components/FoodList";
import ErrorMsg from "./Components/ErrorMsg";
import "./App.css";
import Container from "./Components/Container";
import CustomBox from "./Components/CustomBox";
import { useState } from "react";

function App() {
  // we can also write the above code in one line using Array destructring
  let [foodItems, setFoodItems] = useState(["Chicken", "Motton", "Egg"]);

  //console.log(`currenet value of textState:${textToShow}`); // show the current value in console

  const OnKeyDown = (event) => {
    if ((event.key == "Enter") ^ (event.key == "NumpadEnter")) {
      let newFoodItem = event.target.value; // current Value
      let newItems = [...foodItems, newFoodItem]; // spread foodItems value and add current value..
      console.log(`new food item is ${newFoodItem}`);
      console.log(`New food list is : ${newItems}`);

      setFoodItems(newItems); // update the current value..
      //console.log(foodItems); // newly updated values..
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Protein Food Items List</h1>
        <CustomBox handleOnKeyDown={OnKeyDown}></CustomBox>
        <FoodList items={foodItems}></FoodList>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </Container>
    </>
  );
}

export default App;
