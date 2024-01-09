import FoodList from "./Components/FoodList";
import ErrorMsg from "./Components/ErrorMsg";
import "./App.css";
import Container from "./Components/Container";
import CustomBox from "./Components/CustomBox";
import { useState } from "react";

function App() {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];

  // Maintaing the State..
  //let textStateArr = useState("Food item entered by user .."); // useState hook will return a arr which is contain 2 value 1)current value 2) current value editing method
  // now the initial value of useState is "Food item entered by user .."

  //let textToShow = textStateArr[0]; // take the current value of this arr into textToShow variable.
  //let setTextState = textStateArr[1];

  // we can also write the above code in one line using Array destructring
  let [textToShow, setTextState] = useState("Food item entered by user ..");

  console.log(`currenet value of textState:${textToShow}`); // show the current value in console

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Protein Food Items List</h1>
        <CustomBox handleOnChange={handleOnChange}></CustomBox>
        <p>{textToShow}</p>
        <FoodList items={foodItems}></FoodList>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </Container>
    </>
  );
}

export default App;
