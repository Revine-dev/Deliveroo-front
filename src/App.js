import "./App.css";
import "./responsive.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Restaurant from "./Restaurant";
import Category from "./Category";
import Cart from "./Cart";

function App() {
  const [foodData, setFoodData] = useState({});
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://backend-deliveroo-revine.herokuapp.com/"
      );
      setFoodData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <div className="container loading">En cours de chargement... </div>
        ) : (
          <>
            <Restaurant {...foodData} />
            <section className="content">
              <div className="container pick">
                <div className="menu">
                  {foodData.categories
                    .filter((filter) => filter.meals.length > 0)
                    .map((category, i) => {
                      return (
                        <Category
                          {...category}
                          key={i}
                          setCart={setCart}
                          cart={cart}
                        />
                      );
                    })}
                </div>
                <div className="cart-content">
                  <Cart setCart={setCart} data={cart} />
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <a className="go-cart" href="#cart">
        <div>Voir mon panier</div>

        <div className={`nb ${cart.length === 0 && "empty"}`}>
          {cart.map((item) => 1 * item.quantity).reduce((a, b) => a + b, 0)}
        </div>
      </a>
    </>
  );
}

export default App;
