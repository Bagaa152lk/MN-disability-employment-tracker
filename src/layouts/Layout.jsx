import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ApiService from "../services/ApiService";
import { useGlobal } from "../context/PercentContext";

const Layout = () => {
  const { totalPercent } = useGlobal();
  const [totalStats, setTotalStat] = useState({});

  const getTotalStats = () => {
    ApiService("get", "/progress")
      .then((res) => {
        setTotalStat(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTotalStats();
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {totalStats.total && (
            <Header {...totalStats} percent={totalPercent} />
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
