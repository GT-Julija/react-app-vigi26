import { createContext, useEffect, useState } from "react";

export const NightModeContext = createContext();

const NightModeProvider = ({ children }) => {
  const {isNightMode, setIsNightMode} = useState(false);

  useEffect(() => {
    const nightMode = localStorage.getItem("mode");

    if (nightMode !== null) {
      setIsNightMode(nightMode === "false");
    }
  }, []);

  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);
    //false => !false (true)
   //true => !true (false)
    localStorage.setItem("mode", isNightMode);
  };
  return (
    <NightModeContext.Provider value={{ isNightMode, toggleMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export default NightModeProvider;

