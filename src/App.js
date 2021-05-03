import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Restaurant from "./Restaurant";
import Category from "./Category";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://backend-deliveroo-revine.herokuapp.com/"
      );
      setData(response.data);
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
            <Restaurant {...data} />
            <section className="content">
              <div className="container pick">
                <div className="menu">
                  {data.categories
                    .filter((filter) => filter.meals.length > 0)
                    .map((category, i) => {
                      return <Category {...category} key={i} />;
                    })}
                </div>
                <div className="cart-content">
                  <div className="cart">
                    <button disabled>Valider mon panier</button>
                    <div className="empty">Votre panier est vide</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default App;
