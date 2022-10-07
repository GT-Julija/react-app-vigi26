import "./Card.css";

const Card = ({ imageUrl, text, className }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageUrl} alt={text} />
      <p>{text}</p>
    </div>
  );
};
export default Card;
