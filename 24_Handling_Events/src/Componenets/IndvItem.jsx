import style from "./IndvItem.module.css";
const Item = ({ foodlist }) => {
  // destructring the data from array

  return (
    <li className={`${style["kg-item"]} list-group-item `}>
      <span className={style["kg-span"]}>{foodlist}</span>
      <button
        className={`${style.button} btn btn-success`}
        onClick={() => {
          console.log(`${foodlist} being bought..`);
        }}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
