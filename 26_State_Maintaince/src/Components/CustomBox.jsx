import styles from "./CustomBox.module.css";

const CustomBox = ({ handleOnKeyDown }) => {
  return (
    <input
      className={styles.custombox}
      type="text"
      placeholder="Enter food items here.."
      onKeyDown={handleOnKeyDown}
    ></input>
  );
};

export default CustomBox;
