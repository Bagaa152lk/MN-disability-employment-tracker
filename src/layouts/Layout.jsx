import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const [dataCollect, setDataCollect] = useState([]);
  const [headerTitle, setHeaderTitle] = useState("");

  const collectData = (newData) => {
    setDataCollect(prev => {
      if (!prev.find(ff => ff.code === newData.code)) {
        prev = [...prev, newData];
      }
      return prev;
    });
  }

  const clearCollect = () => {
    setDataCollect([]);
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <Header dataList={dataCollect ?? []} headerTitle={headerTitle} />
          <Outlet context={{ collectData, clearCollect, setHeaderTitle }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
