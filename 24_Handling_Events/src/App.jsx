import FoodList from "./Componenets/FoodList";
import ErrorMsg from "./Componenets/ErrorMsg";
import "./App.css";
import Container from "./Componenets/Container";
import CustomBox from "./Componenets/CustomBox";

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
