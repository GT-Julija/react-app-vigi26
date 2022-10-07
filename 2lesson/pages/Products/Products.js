import { useState } from "react";
import "./Products.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const Products = () => {
  const [counter, setCounter] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("Rokas");
  const [surname, setSurname] = useState("Andreikenas");
  const [activeDay, setActiveDay] = useState("");
  const [todos, setTodos] = useState(["Išmokti React"]);
  const [todoText, setTodoText] = useState("");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const transformSurname = () => {
    if (surname === "Andreikenas") {
      setSurname("Kazlauskas");
    } else {
      setSurname("Andreikenas");
    }
  };

  const handleAddTodo = () => {
    // [...todos, todoText] => ["Išmokti React", todoText] => ["Išmokti React", "Eiti miegoti"]
    // pridėti tik tada, jeigu todoText yra teigiamas
    setTodos([...todos, todoText]);
    setTodoText("");
  };

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <button onClick={handleClick}>Products: {counter}</button>
      <br />
      <br />
      <button onClick={() => setQuantity(100)}>100</button>
      <button onClick={() => setQuantity(200)}>200</button>
      <button onClick={() => setQuantity(500)}>500</button>
      <h2>Kiekis {quantity}</h2>
      <br />
      <br />
      <h2 onClick={() => setName("Tomas")}>{name}</h2>
      <h2 onClick={transformSurname}>{surname}</h2>
      {weekdays.map((weekday) => (
        <span
          className={`weekday ${activeDay === weekday ? "active" : ""}`}
          onClick={() => setActiveDay(weekday)}
        >
          {weekday}
        </span>
      ))}

      <div className="todo-list">
        <input
          type="text"
          className="todo-input"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <CustomButton variant="contained" onClick={handleAddTodo}>
          Add todo
        </CustomButton>
        <ul>
          {todos.map((todo) => (
            <li>
              {todo} <span>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;