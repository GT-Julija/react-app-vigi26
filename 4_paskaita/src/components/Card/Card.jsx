import "./Card.css";

const Card = ({ imageUrl, text, className }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageUrl} alt={text} />
      <p>{text}</p>
      {/* jeigu textas yra trumpesinis uz 5 simbolius, atvaizduok paragrafa */}
      {text.length < 5 && <p>Very short text</p>}
      {className ? <p>Extra class</p> : <p>No class</p>}
    </div>
  );
};

export default Card;








/*


import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <img src={props.url} alt={props.title} />
      <p className="title">{props.title}</p>
      <h2 className="price">{props.price}</h2>
      <button type="submit">Istrinti</button>
    </div>
  );
};

export default Card;
*/