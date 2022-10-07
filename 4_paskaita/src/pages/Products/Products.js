import { useState } from "react";
//import CustomButton from "../../../../2lesson/src/components/CustomButton/CustomButton";
import CustomButton from "../components/CustomButton/CustomButton";
import "./Products.css";

// kai uzkraunmas puslapis, yra renderinami elementai
// kai nustatomas setState betkuris, daromas rerenderis
const Products = () => {
  const [counter, setCounter] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("Julija");
  const [surname, setSurname] = useState("Gedgaude");
  const [activeDay, setActiveDay] = useState("");

  const [todos, setTodos] = useState(["Išmokti React"]);
  const [todoText, setTodoText] = useState("");

  const [colors, setColors] = useState(["red"]); 
  const [colorText, setColorText] = useState("");

  const [boxWidth, setBoxWidth] = useState(50);
  const [boxHeight, setboxHeight] = useState(50);
  const [boxColor, setBoxColor] = useState("black");
 
  console.log(activeDay);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const transformSurname = () => {
    if (surname === "Gedgaude") {
        setSurname("Trocke");
    } else {
        setSurname("Gedgaude");
    }
   
  };

  const handleAddColor = () => {
    if(colorText){
        setColors(prevColors => [...prevColors, colorText]);  //prideda nauja spalva
        setColorText("");   //isvalo inputa
     }
};

const handleAddTodo = () => {
// [...todos]  ["ismokti React", todoText] => ["Ismokti react", "eiti miegoti"]
// [todos] [["ismokti React"]]

if (todoText) {
   setTodos([...todos, todoText]);  // prideda nauja todo
   setTodoText("");  // isvalo inputo texta 
}
};

const handleDeleteTodo = (todo) => {
setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
};

const handleIncreaseBoxSize= () => {
setBoxWidth( (prevBoxWidth) => prevBoxWidth + 25);
setboxHeight((prevBoxHeight) => prevBoxHeight + 25);
if(boxColor === "black"){
    setBoxColor("grey");
}else {
    setBoxColor("black");
}
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

  console.log(todoText);

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
      <h2 onClick={() => setName("Laura")}>{name}</h2>
      <h2 onClick={transformSurname}>{surname}</h2>

      {weekdays.map((weekday) => (
        <span
        key={weekday}
        className={`weekday ${activeDay === weekday ? "active" : ""}`}
        onClick={() => setActiveDay(weekday)}
      >
        {weekday}
      </span>
      ))}

<br />
        <br />
        <input
          type="text"
          className="todo-input"
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
        />
        <CustomButton variant="contained" onClick={handleAddTodo}>
            Add todo
            </CustomButton>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                         {todo} 
                         <span onClick={() => handleDeleteTodo(todo)}>x</span>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <br />
            <input 
            type="text" 
            className="todo-input" 
            value={colorText} 
            onChange={(e) => setColorText(e.target.value)}
            />
            <CustomButton onClick={handleAddColor}>Add new color</CustomButton>
{colors.map((color, index) => ( 
<div key={`${color}_${index}`} 
style={{ backgroundColor: color, width: 50, height:50 }}
/>
))}

<br /> 
<br /> 
<div style={{backgroundColor: boxColor, width: boxWidth, height:boxHeight }}/>

<button onClick={handleIncreaseBoxSize}>Increase box size</button>
      </div>
      
    
  );
};


export default Products;


