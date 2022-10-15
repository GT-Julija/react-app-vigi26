import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
//import Navbar from "../../components/Navbar/Navbar";
import "./Todos.css";

const Todos = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect( () => {
        const localTodos = JSON.parse(localStorage.getItem("todos"));
        if(localTodos) {
            setTodos(localTodos);
        }
    }, []);
  
    const handleAddTodo = (event) => {
      event.preventDefault();
      if (text) {
         setTodos(prevTodos => [...prevTodos, text]);
         setText("");
         localStorage.setItem("todos", JSON.stringify([...todos, text]));
      }
     };
  

  return (
    <div> 
        <Navbar/> 
    <div className="container">
        
      {todos.lenght} Todos 
      <form onSubmit={handleAddTodo}> 
<input 
type="text" 
value={text} 
onChange={(e) => setText(e.target.value)} 
/>
<button type="submit">Add todo</button>
      </form>
      <ul>
      {todos.map((todo, index) => ( 
        <li> <h3 key={index}>{todo}</h3></li>
      
      ))}
      </ul>
    </div>
    </div>
  );
};

export default Todos;