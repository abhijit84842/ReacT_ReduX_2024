import styles from "./CustomBox.module.css";

const CustomBox = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
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
