import Meal from "./Meal";

const Category = (props) => {
  return (
    <div className="category">
      <h2 className="category-name">{props.name}</h2>
      <div className="meals">
        {props.meals.map((meal) => {
          return <Meal {...meal} key={meal.id} />;
        })}
      </div>
    </div>
  );
};

export default Category;
