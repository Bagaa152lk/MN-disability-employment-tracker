import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

const Layout = () => {
  const { getTreeData } = useGlobal();
  const treeData = getTreeData();
  const [dataList, setDataList] = useState([]);

  console.log('treedata:', treeData);

  useEffect(() => {
    if (dataList.length === 0)
      setDataList(treeData);
  }, [treeData]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <Outlet context={{ dataList, setDataList }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
