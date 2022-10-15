import "./App.css";
import { Routes, Route} from "react-router-dom";
//import Todos from "./pages/Todos/Todos";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Add from "./pages/Add/Add";


function App() {
  return (
    <div>
     <Routes>
<Route path="/" element={<Home />} exact  />  
<Route path="/add" element={<Add />}  />
<Route path="*" element={<Error />}  />
     </Routes>
    </div>
  );
}

export default App;
