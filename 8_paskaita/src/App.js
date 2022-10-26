import { Routes, Route } from "react-router-dom";
import NightModeProvider from "./components/contexts/NightModeProvider";
import PetsProvider from "./components/contexts/PetsProvider";
import Health from "./pages/Health/Health";
import Pets from "./pages/Pets/Pets";

const App = () => {
  //susikurti dar viena context/provider su kalba
  // LT/EN/RU spaudziant keiciasi spalva
  return (
    <NightModeProvider>
    <PetsProvider> 
      <Routes>
      <Route path="/" element={<Pets />} exact />
      <Route path="/health/:id" element={<Health />} />
    </Routes>
   
   
    </PetsProvider>
    </NightModeProvider>
  );
};

export default App;
