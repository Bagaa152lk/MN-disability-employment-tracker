import { useEffect, useState } from "react";
import ViewToggle from "../components/ViewToggle";
import StatsCard from "../components/StatsCard";
import {
  getAimagList,
  getSoumListByAimag,
  getBagListBySoum,
} from "../utils/tsvDataUtils";
import TableRow from "../components/TableRow";

const Main = () => {
  const aimagList = getAimagList();
  const [dataList, setDataList] = useState([]);
  const [view, setView] = useState("card");

  useEffect(() => {
    if (dataList.length === 0) {
      setDataList(aimagList);
    }
  }, [aimagList]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Аймаг/хотын жагсаалт</h2>
        <ViewToggle view={view} setView={setView} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {view &&
          view === "card" &&
          dataList.map((elm, index) => <StatsCard key={index} {...elm} />)}
        {view && view === "table" && (
          <div className="col-span-full">
            <table className="min-w-full bg-card border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left text-sm font-medium text-foreground">
                    Нэр
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-foreground">
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
                  <TableRow key={index} {...elm} />
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
