const Items = (props) => {
  const addItem = (i, plus) => {
    let newData = [...props.data];
    newData[i].quantity += plus;

    if (newData[i].quantity === 0) {
      const result = [];
      for (let index = 0; index < newData.length; index++) {
        if (index !== i) {
          result.push(newData[index]);
        }
      }
      return props.setCart(result);
    }

    props.setCart(newData);
  };

  const formatPrice = (price) => {
    return price.toFixed(2).toLocaleString().replace(/\./, ",");
  };

  return (
    <div className="items">
      {props.data.map((item, i) => {
        return (
          <div className="item" key={i}>
            <div className="quantity">
              <button className="substrate" onClick={() => addItem(i, -1)}>
                -
              </button>
              <div className="nb">{item.quantity}</div>
              <button className="add" onClick={() => addItem(i, 1)}>
                +
              </button>
            </div>
            <div className="name">{item.name}</div>
            <div className="price">
              {formatPrice(Number(item.price) * Number(item.quantity))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
