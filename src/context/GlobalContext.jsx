import React, { createContext, useContext, useEffect, useState } from "react";
import { convertToTree } from "../utils/functions";

// Context үүсгэх
const GlobalContext = createContext();

// Provider компонент
export const GlobalProvider = ({ children }) => {
  const [totalPercent, setTotalPercent] = useState(0);
  const [jsonData, setJsonData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/data.json");
    let parsedData = await res.json();
    setJsonData(parsedData);
  };

  const getTreeData = () => {
    return convertToTree(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <GlobalContext.Provider value={{ totalPercent, setTotalPercent, jsonData, getTreeData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook
export const useGlobal = () => useContext(GlobalContext);
