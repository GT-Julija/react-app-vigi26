import { createContext, useState } from "react";

export const LangModeContext = createContext();

const LangModeProvider = ({ children }) => {
  const [isLangLit, setIsLangLit] = useState(false);

  const toggleLit = () => {
    setIsLangLit((prevMode) => !prevMode);
  };
  return (
    <LangModeContext.Provider value={{ isLangLit, toggleLit }}>
      {children}
    </LangModeContext.Provider>
  );
};

export default LangModeProvider;