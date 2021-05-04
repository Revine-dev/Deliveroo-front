const Meal = (props) => {
  const addToCart = () => {
    let newCart = [...props.cart];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === props.id) {
        newCart[i].quantity++;
        return props.setCart(newCart);
      }
    }

    newCart.push({
      id: props.id,
      name: props.title,
      quantity: 1,
      price: props.price,
    });

    props.setCart(newCart);
  };

  return (
    <div className="card">
      <div className="meal" onClick={addToCart}>
        <div className="infos">
          <h3 className="name">{props.title}</h3>
          <p className="description">{props.description}</p>
          <div className="price">
            <div className="amount">{props.price.replace(/\./, ",")} €</div>
            {props.popular && (
              <div className="popular">
                <svg
                  style={{ width: 20, height: 20, marginRight: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ff8000"
                  class="feather feather-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Populaire
              </div>
            )}
          </div>
        </div>
        {props.picture && (
          <img src={props.picture} alt="Meal cover" className="picture" />
        )}
      </div>
    </div>
  );
};

export default Meal;
