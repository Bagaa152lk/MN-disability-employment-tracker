import React, { createContext, useContext, useEffect, useState } from "react";
import { convertToTree } from "../utils/functions";

// Context үүсгэх
const GlobalContext = createContext();

// Provider компонент
export const GlobalProvider = ({ children }) => {
  const [sumCnt, setSumCnt] = useState(0);
  return (
    <GlobalContext.Provider value={{ sumCnt, setSumCnt }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook
export const useGlobal = () => useContext(GlobalContext);
