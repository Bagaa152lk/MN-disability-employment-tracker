// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import { GlobalProvider } from "./context/PercentContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/:aimagcode" element={<Main />} />
            <Route path="/:aimagcode/:soumcode" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
