import style from "./IndvItem.module.css";
const Item = ({ foodlist }) => {
  // destructring the data from array

  return (
    <li className={`${style["kg-item"]} list-group-item `}>
      <span className={style["kg-span"]}>{foodlist}</span>
    </li>
  );
};
export default Item;
