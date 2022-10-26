import { createContext, useState, useEffect } from "react";

export const PetsContext = createContext();

const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => {
        setPets(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <PetsContext.Provider value={{ pets, setPets }}>
      {children}
    </PetsContext.Provider>
  );
};

export default PetsProvider;
