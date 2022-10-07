import "./Card.css";

const Card = (props) => {
  return (
    <div className={props.className}>
      <img
        src={
          props.url ||
          "https://static.vecteezy.com/system/resources/thumbnails/000/567/615/small/vector60-1696-01.jpg"
        }
        alt={props.name || "random user"}
      />
      <div className="user-name">{props.name || "Random User"}</div>
      {props.name.length > 10 && <p>Produktas</p>}
      {props.className ? <p>Extra class added</p> : <p>No class added</p>}
    </div>
  );
};

export default Card;
