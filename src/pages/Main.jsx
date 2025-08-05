import React, { useEffect, useState } from "react";
import ViewToggle from "../components/ViewToggle";
import StatsCard from "../components/StatsCard";
import TableRow from "../components/TableRow";
import { useOutletContext, useParams } from "react-router-dom";
import Header from "../components/Header";
import useLoading from "../hooks/useLoading";
import ApiService from "../services/ApiService";

const Main = () => {
  const { dataList } = useOutletContext();
  const { showLoading } = useLoading();
  const { aimagcode, soumcode } = useParams();

  const [localList, setLocalList] = useState([]);
  const [view, setView] = useState("card");
  const [headerTitle, setHeaderTitle] = useState({
    aimagname: "",
    soumname: "",
  });
  const [sumData, setSumData] = useState({ sumtotal: 0, sumqty: 0 });

  useEffect(() => {
    if (!dataList || dataList.length === 0) {
      setLocalList([]);
      return;
    }

    const loadProgress = async () => {
      try {
        showLoading(true);
        const promises = dataList.map((dd) => {
          const id =
            aimagcode && soumcode ? `${aimagcode}/${dd.code}` : dd.code;
          return ApiService("get", `/progress/${id}`)
            .then((res) => ({ ...dd, progress: res }))
            .catch((err) => {
              console.error("progress fetch error for", dd.code, err);
              return { ...dd, progress: null };
            });
        });

        const results = await Promise.all(promises);
        setLocalList(results);
      } finally {
        showLoading(false);
      }
    };

    loadProgress();
  }, [dataList]);

  useEffect(() => {
    if (!localList.length) {
      setSumData({ sumtotal: 0, sumqty: 0 });
      return;
    }

    let _sum1 = 0,
      _sum2 = 0;
    localList.forEach(({ progress }) => {
      _sum1 += (progress.total ?? 0) * 1;
      _sum2 +=
        ((progress.total ?? 0) * 1 * ((progress.percent ?? 0) * 1)) / 100;
    });

    setSumData({ sumtotal: _sum1, sumqty: _sum2 });
  }, [localList]);

  return (
    <>
      <Header headerTitle={headerTitle} sumData={sumData} />
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {aimagcode && soumcode
            ? "Баг/хорооны жагсаалт"
            : aimagcode
            ? "Сум/дүүргийн жагсаалт"
            : "Аймаг/хотын жагсаалт"}
        </h2>
        <ViewToggle view={view} setView={setView} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {view === "card" &&
          localList.map((elm, idx) => (
            <StatsCard
              key={elm.code ?? idx}
              {...elm}
              setHeaderTitle={setHeaderTitle}
            />
          ))}

        {view === "table" && (
          <div className="col-span-full">
            <table className="min-w-full bg-card border">
              <thead>{/* ... */}</thead>
              <tbody>
                {localList.map((elm, index) => (
                  <TableRow
                    key={elm.code ?? index}
                    {...elm}
                    setHeaderTitle={setHeaderTitle}
                  />
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
