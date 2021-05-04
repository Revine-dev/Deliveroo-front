const Restaurant = (props) => {
  return (
    <section className="container restaurant">
      <div className="infos">
        <h1 className="name">{props.restaurant.name}</h1>
        <p>{props.restaurant.description}</p>
      </div>
      <img
        src={`${props.restaurant.picture}?width=300&height=300&auto=webp&format=jpg&fit=crop`}
        alt="Restaurant cover"
      />
    </section>
  );
};

export default Restaurant;
