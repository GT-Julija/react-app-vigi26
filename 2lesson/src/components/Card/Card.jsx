import "./Card.css";

const Card = ({ imageUrl, text, className }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageUrl} alt={text} />
      <p> {text} </p>
      {/*Jeigu tekstas yra ilgesnis negu 10 simboliu, atvaizduok paragrafa */}
      {text.lenght > 10 && <p> Your text is very long</p>}
      {/*Jeigu className yra teigiamas prideti "Extra class added, o jei ne "No class added'*/}
      {className ? <p> Extra class added</p>: <p>No class added</p>}
    </div>
  );
};

export default Card;
