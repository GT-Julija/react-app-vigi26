import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";


const Home = () => {
  const [name, setName] = useState("Julija");
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClickReverse = () => {
    setName("ajiluJ");
  };

  const handleAddTodo = () => {
    if (todoText) {
      setTodos((prevTodos) => [...prevTodos, todoText]);
      setTodoText("");
    }
  };

  return (
    <div>
      <h1>My lovely home page</h1>
      <Link to="/profile/867133876">
        <Button>Open Julija profile</Button>
      </Link>
      <a href="https://autoplius.lt/">Uzeik i autoplius ir nusipirk auto!</a>
      <hr />
      <a href="https://delfi.lt/" target="_blank" rel="noreferrer">
        Uzeik i delfi!
      </a>
      <hr />
      <Link to="/profile/867147125">Open Simas profile</Link>
      <h2>My name is {name}</h2>
      <Button onClick={handleClickReverse}>Reverse my name!</Button>
      <br />
      <input value={todoText} onChange={(event) => setTodoText(event.target.value)} />
      <Button onClick={handleAddTodo}>Pridek todo</Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ color: todo.completed ? "green" : "red" }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;