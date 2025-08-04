import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import ApiService from "../services/ApiService";
import { useNavigate, useParams } from "react-router-dom";
import useLoading from "../hooks/useLoading";

const StatsCard = ({ name, childcnt, code, children, setHeaderTitle, setDataList, setCollect }) => {
  const navigate = useNavigate();
  const { showLoading } = useLoading();
  const { aimagcode, soumcode } = useParams();
  const [progress, setProgress] = useState(null);

  const getProgress = () => {
    showLoading(true);
    ApiService("get", `/progress/${aimagcode && soumcode ? `${aimagcode}/${code}` : code}`)
      .then((res) => {
        setProgress(res);
        setCollect(prev => {
          if (!prev.find((pp) => pp.code === res.code)) {
            return [...prev, res];
          } else {
            return prev;
          }
        })
      })
      .catch((err) => console.error(err))
      .finally(() => showLoading(false));
  };

  useEffect(() => {
    getProgress();
  }, []);

  return (
    <div
      className="rounded-lg border bg-card text-foreground shadow-sm transition-all duration-200 hover:shadow-lg border-l-4 border-l-primary cursor-pointer hover:scale-[1.02]"
      onClick={e => {
        e.preventDefault();
        setHeaderTitle(name);
        if (!soumcode) {
          navigate(`${code}`);
          setDataList(children)
        }
      }}
    >
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
            <h3 className="tracking-tight text-lg font-semibold text-foreground">
              {name}
            </h3>
          </div>
          {progress && <Status percent={(progress.percent ?? 0) * 1} />}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {aimagcode && soumcode ? null : childcnt} {aimagcode && soumcode ? "" : aimagcode ? "баг/хороо" : "сум/дүүрэг"}
        </p>
      </div>
      <div className="p-6 pt-0 space-y-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-primary">
            {(progress?.percent ?? 0) * 1}%
          </p>
          <p className="text-sm text-muted-foreground mt-1">Гүйцэтгэл</p>
        </div>
        {progress && <ProgressBar percent={progress.percent * 1 ?? 0} />}
      </div>
    </div>
  );
};

export default StatsCard;
