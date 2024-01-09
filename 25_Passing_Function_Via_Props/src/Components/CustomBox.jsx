import styles from "./CustomBox.module.css";

const CustomBox = ({ handleOnChange }) => {
  return (
    <input
      className={styles.custombox}
      type="text"
      placeholder="Enter food items here.."
      onChange={handleOnChange}
    ></input>
  );
};

export default CustomBox;
