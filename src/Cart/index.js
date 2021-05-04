import Items from "./Items";

const Cart = (props) => {
  const disabled = props.data.length === 0 ? { disabled: true } : "";

  const getTotal = (deliver) => {
    let price = 0;
    for (let i = 0; i < props.data.length; i++) {
      price += Number(props.data[i].price) * Number(props.data[i].quantity);
    }
    if (deliver && typeof deliver === "number") {
      price += deliver;
    }
    return price.toFixed(2);
  };

  return (
    <div className="cart">
      <button {...disabled}>Valider mon panier</button>
      {props.data.length > 0 ? (
        <>
          <Items data={props.data} setCart={props.setCart} />
          <div className="subtotal">
            <div className="line">Subtotal</div>
            <div className="price">{getTotal().replace(/\./, ",")} €</div>
          </div>
          <div className="deliver">
            <div className="line">Frais de livraison</div>
            <div className="price">2,50 €</div>
          </div>
          <div className="total">
            <div className="line">Total</div>
            <div className="price">{getTotal(2.5).replace(/\./, ",")} €</div>
          </div>
        </>
      ) : (
        <div className="empty">Votre panier est vide</div>
      )}
    </div>
  );
};

export default Cart;
