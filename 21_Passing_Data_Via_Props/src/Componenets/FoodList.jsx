import Item from "./IndvItem";
const FoodList = ({ items }) => {
  // destructring the data from items array
  return (
    <>
      <ul class="list-group">
        {items.map((list) => (
          <Item key={list} foodlist={list}></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodList;
