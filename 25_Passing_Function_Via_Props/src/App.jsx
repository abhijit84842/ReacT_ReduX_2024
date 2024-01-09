import FoodList from "./Components/FoodList";
import ErrorMsg from "./Components/ErrorMsg";
import "./App.css";
import Container from "./Components/Container";
import CustomBox from "./Components/CustomBox";

function App() {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Protein Food Items List</h1>
        <CustomBox handleOnChange={handleOnChange}></CustomBox>
        <FoodList items={foodItems}></FoodList>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </Container>
    </>
  );
}

export default App;
