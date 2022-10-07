// index.js faile pasikeisti i <App />
import "./App.css";
import Button from "./components/Button/Button";
import CustomButton from "./components/CustomButton/CustomButton";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card"

const App = () => {
  const names = ["Julija", "Tomas", "Romas", "Gedas", "Greta", "Vilius"];

  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Strawberries",
    "Berries",
  ];

  const colors = ["red", "green", "blue", "yellow"];

  return (
    <div className="container">
      <CustomButton>Julija</CustomButton>
      <CustomButton>Tomas</CustomButton>
      <CustomButton>Romas</CustomButton>

      <hr />
      {names.map((name) => (
        <CustomButton>{name}</CustomButton>
      ))}

      {[1, 2, 3, 4, 5, 6].map((number) => (
        <div>Numeris {number}</div>
      ))}

      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>

      <ol>
        {colors.map((color) => (
          <li>Spalva {color}</li>
        ))}
      </ol>

      {colors.map((color) => (
        <Hero
        //title={color}
          subtitle={`Mano megstamiausia spalva yra ${color}`}
          color={color}
        />
      ))}

      {colors.map((color) => (
        <Button text={color} bgColor={color} />
      ))}

      {/* 
      const App = () => {
        return 
        <div classNme="container">
        <div className="center">
        <CustomButton>Paspausk mane!</CustomButton>
        <br />
        <br />
        <CustomButton variant="contained">+100$</CustomButton>
      </div>
     Julija
      <div className="buttons">
        <Button text="Say hello" type="button" />
        <Button text="Click me" type="submit" />
        <Button text="Delete" bgColor="red" />
      </div>
      <Button text="Green button" bgColor="green" />
      <Hero title="Info hero" subtitle="Info subtitle" color="green" />
      <Hero
        title="Info hero"
        subtitle="Info subtitle"
        color="blue"
        className="center"
      >
        <div>Julija</div>
      </Hero>
      <Hero title="Info hero" subtitle="Info subtitle" color="red">
        <div className="center">
        {/*Children}
          <Button text="Green button" bgColor="green" />
        </div>
      </Hero>
      <div className="car-card-mini">
        <Card
          imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
          text="Lamborghini"
        />
      </div>
      <div className="car-card-medium">
        <Card
          imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
          text="Lambo"
        />
      </div>
      <Card
        imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
        text="Lamborghini"
        className="car-card-mini"
      />
      <Hero title="Nieko nesuprantu" color="red" /> */}
    </div>
  );
};

export default App;