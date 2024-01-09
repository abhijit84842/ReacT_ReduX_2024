import style from "./IndvItem.module.css";
const Item = ({ foodlist }) => {
  // destructring the data from array

  const handleBuyButtonClicked = (event) => {
    // get the event object here

    console.log(event); // print the event object

    console.log(`${foodlist} being bought..`);
  };

  return (
    <li className={`${style["kg-item"]} list-group-item `}>
      <span className={style["kg-span"]}>{foodlist}</span>
      <button
        className={`${style.button} btn btn-success`}
        onClick={(event) => handleBuyButtonClicked(event)} // pass the event object
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
