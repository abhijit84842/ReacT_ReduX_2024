import style from "./IndvItem.module.css";
const Item = ({ foodlist, handleBuyButton }) => {
  // destructring the data from array

  return (
    <li className={`${style["kg-item"]} list-group-item `}>
      <span className={style["kg-span"]}>{foodlist}</span>
      <button
        className={`${style.button} btn btn-success`}
        onClick={handleBuyButton} // pass the event object
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
