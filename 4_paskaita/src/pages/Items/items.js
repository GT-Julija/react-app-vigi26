//susikurti pagal reikiama standarta ieskoti Portfolio.js
//pasikeisti index.js i <Items>
//dizainas 4 Codeacademy platformos pamokoje
//Optional:Add funkcionalumas, prisideti inputus ir add button
import Card from "../../components/Card/Card";
//import { data } from "./mocks";
import "./items.css";
import { useState, useEffect } from "react";
//jeigu norime, kad useEffect suveiktu tik viena karta, naudojame tuscia masyva []

const Items = () => {
  const [products, setProducts] = useState([]); // useState() - undefined,  map  tik ant masyvo
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteProducts = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== productId)
    );
  };

  return (
    <div className="products">
        {isLoading && <h1>Duomenys kraunasi...</h1>}
        
      {products.map((item) => (
        <div key={item.id} onclick={() => handleDeleteProducts(item.id)}>
          <Card imageUrl={item.image} text={`${item.title} ($${item.price})`} />
        </div>
      ))}
    </div>
  );
};

export default Items;
