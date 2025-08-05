// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import { GlobalProvider } from "./context/GlobalContext";
import { LoadingContextProvider } from "./components/loading/LoadingContextProvider";
import LoadingSpin from "./components/loading/LoadingSpin";
import { convertToTree } from "./utils/functions";

function App() {
  const [treeData, setTreeData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/data.json");
    let parsedData = await res.json();
    setTreeData(convertToTree(parsedData));
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <LoadingContextProvider>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout treeData={treeData} />}>
              <Route index element={<Main />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/:aimagcode" element={<Main />} />
              <Route path="/:aimagcode/:soumcode" element={<Main />} />
            </Route>
          </Routes>
        </Router>
        <LoadingSpin />
      </GlobalProvider>
    </LoadingContextProvider>
  );
}

export default App;
