import { Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos/Todos";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
