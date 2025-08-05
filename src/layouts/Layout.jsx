import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getBagListBySoum, getSoumListByAimag } from "../utils/functions";

const Layout = ({ treeData }) => {
  const location = useLocation();

  const [dataList, setDataList] = useState(treeData);
  const { aimagcode, soumcode } = useParams();

  useEffect(() => {
    if (treeData.length > 0 && dataList.length === 0) {
      setDataList(treeData);
    }
  }, [treeData]);

  useEffect(() => {
    if (aimagcode && soumcode) {
      setDataList(getBagListBySoum(treeData, aimagcode, soumcode));
    } else if (aimagcode) {
      setDataList(getSoumListByAimag(treeData, aimagcode));
    } else {
      setDataList(treeData);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <Outlet context={{ dataList }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
