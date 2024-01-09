import FoodList from "./Components/FoodList";
import ErrorMsg from "./Components/ErrorMsg";
import "./App.css";
import Container from "./Components/Container";
import CustomBox from "./Components/CustomBox";

function App() {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Protein Food Items List</h1>
        <CustomBox></CustomBox>
        <FoodList items={foodItems}></FoodList>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </Container>
    </>
  );
}

export default App;
