import Item from "./IndvItem";
const FoodList = ({ items }) => {
  // destructring the data from items array
  return (
    <>
      <ul className="list-group">
        {items.map((list) => (
          <Item
            key={list}
            foodlist={list}
            handleBuyButton={() => console.log(`${list} bought..`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodList;
