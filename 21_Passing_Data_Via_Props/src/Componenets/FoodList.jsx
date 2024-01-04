const FoodList = () => {
  let foodItems = ["Chicken", "Motton", "Egg", "Banana"];
  return (
    <>
      <ul class="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};
export default FoodList;
