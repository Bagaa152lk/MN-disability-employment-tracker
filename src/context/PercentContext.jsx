import React, { createContext, useContext, useState } from "react";

// Context үүсгэх
const GlobalContext = createContext();

// Provider компонент
export const GlobalProvider = ({ children }) => {
  const [totalPercent, setTotalPercent] = useState(0);

  return (
    <GlobalContext.Provider value={{ totalPercent, setTotalPercent }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook
export const useGlobal = () => useContext(GlobalContext);
