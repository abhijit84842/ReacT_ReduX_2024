import { useState } from "react";
import Item from "./IndvItem";
const FoodList = ({ items }) => {
  // destructring the data from items array

  // define a State
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (list, event) => {
    let newItems = [...activeItems, list];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((list) => (
          <Item
            key={list}
            foodlist={list}
            bought={activeItems.includes(list)}
            handleBuyButton={(event) => onBuyButton(list, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodList;
