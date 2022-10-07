import Hero from "./components/web/Hero/Hero";
import Card from "./components/web/Card/Card";
import Button from "./components/web/Button/Button";
import "./App.css";

// const App = () => {
//   return (
//     <div className="container">
//       <Hero title={"Hello, how are you"} subtitle={"nice to meet you"} />
//       <p>Hello</p>
//       <Button text={"Press me!"} type="submit" />
//       <Button text={"Buy!"} type="submit" />
//       <div className="buttons">
//         <Button />
//         <Button bgColor="orange" />
//         <Button text="Submit" />
//         <Button />
//       </div>
//       <Hero color={"orange"} />
//       <Button text={"Register"} bgColor="hotpink" />
//       <Button hasIcon />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Hero
        url={
          "https://toppng.com/uploads/preview/leaves-green-dark-plant-11569844824xscd3pcf44.jpg"
        }
      >
        <Button />
      </Hero>
      <div className="container">
        <div className="container-info">
          <h1>Produktai</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            placeat autem, laborum ipsum repellat accusamus similique. Impedit
            reprehenderit, a minus, tempore voluptate, fugit molestiae mollitia
            quae dolor libero labore atque ut! Perspiciatis explicabo temporibus
            veritatis animi nam!
          </p>
        </div>
        <div className="cards-container">
          {[
            [
              "Obuolinė mėta",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriCptMWpHUHX5ZlQ2f2Py8nvaU9Iqhpshug&usqp=CAU",
            ],
            [
              "Raudonlapis bazilikas",
              "https://cdn.jardin-planetario.com/krauter/7272398/basilikum_ein_star_unter_den_krutern_im_portrait_5.jpg.webp",
            ],
            [
              "Kvapnusis čiobrelis",
              "https://zolininkas.lt/wp-content/uploads/2019/05/paprastasis-ciobrelis-thymus-serpyllum-990x660.jpg",
            ],
            [
              "Sultingos rūgštynės",
              "https://www.seklos.lt/lt/c/62-category_default/rugstynes.jpg",
            ],
            [
              "",
              "https://gardenseedsmarket.com/images/thumbnails/320/239/detailed/33/Rukiew_wodna_3.jpg",
            ],
            ["Krapai", ""],
          ].map((user) => (
            <Card name={`${user[0]}`} url={`${user[1]}`} className={"card"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
