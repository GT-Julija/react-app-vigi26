// index.js faile pasikeisti i <Porftolio />
import CustomButton from "../../components/CustomButton/CustomButton";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import "./Portfolio.css"; // 2.

// 1. Susiskurti const su tokiu pat kaip failo pavadinimu pvz Porfolio
// 2. Prisideti css faila
// 3. Iseksportuoti const

// 1.
const Portfolio = () => {
  const porfolioItems = [
    {
      imageUrl:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
      text: "Pirmas itemas",
    },
    {
      imageUrl:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
      text: "Antras itemas",
    },
    {
      imageUrl:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
      text: "Trecias itemas",
    },
    {
      imageUrl:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
      text: "Trecias itemas",
    },
  ];

  return (
    <div>
      <Hero
        title="Title"
        subtitle="Some about text in two lines"
        color="green"
        className="center"
      >
        <CustomButton variant="contained">Button</CustomButton>
      </Hero>
      <div className="container center">
        <h2>Porfolio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
          tortor at mi imperdiet dignissim. Donec faucibus nunc in mattis
          laoreet. Aliquam eros velit, porta non tellus a, finibus malesuada
          libero.
        </p>
        <div className="cards">
          {porfolioItems.map((item) => (
            <Card
              imageUrl={item.imageUrl}
              text={item.text}
              className="card-mini"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3.
export default Portfolio;