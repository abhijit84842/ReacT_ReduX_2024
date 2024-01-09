import FoodList from "./Componenets/FoodList";
import ErrorMsg from "./Componenets/ErrorMsg";
import "./App.css";
import Container from "./Componenets/Container";
function App() {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Protein Food Items List</h1>
        <FoodList items={foodItems}></FoodList>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </Container>

      <Container>
        <p>
          Above is the list of healthy food thats are good for health and well
          being.
        </p>
      </Container>
    </>
  );
}

export default App;
