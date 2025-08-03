import React, { useEffect, useState } from "react";
import ViewToggle from "../components/ViewToggle";
import StatsCard from "../components/StatsCard";
import {
  getAimagList,
  getSoumListByAimag,
  getBagListBySoum,
} from "../utils/tsvDataUtils";
import TableRow from "../components/TableRow";
import { useOutletContext, useParams } from "react-router-dom";

const Main = () => {
  const aimagList = getAimagList();
  const { aimagcode, soumcode } = useParams();

  const { collectData, setHeaderTitle } = useOutletContext();
  const [dataList, setDataList] = useState([]);
  const [view, setView] = useState("card");

  useEffect(() => {
    if (dataList.length === 0) {
      if (aimagcode && soumcode) {
        const bagList = getBagListBySoum(aimagcode, soumcode);
        setDataList(bagList);
      } else if (aimagcode) {
        const soumList = getSoumListByAimag(aimagcode);
        setDataList(soumList);
      } else {
        setDataList(aimagList);
      }
    }
  }, [aimagList, aimagcode, soumcode]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{aimagcode && soumcode ? "Баг/хорооны жагсаалт" : aimagcode ? "Сум/дүүргийн жагсаалт" : "Аймаг/хотын жагсаалт"}</h2>
        <ViewToggle view={view} setView={setView} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {view &&
          view === "card" &&
          dataList.map((elm, index) => <StatsCard key={index} {...elm} collectData={collectData} setHeaderTitle={setHeaderTitle} />)}
        {view && view === "table" && (
          <div className="col-span-full">
            <table className="min-w-full bg-card border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left text-sm font-medium text-foreground">
                    Нэр
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-foreground" colSpan={2}>
                    Гүйцэтгэл
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-foreground">
                    Төлөв
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-foreground">
                    Дэлгэрэнгүй
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((elm, index) => (
                  <TableRow key={index} {...elm} setHeaderTitle={setHeaderTitle} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
