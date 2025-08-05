import React from "react";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import { ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const TableRow = ({ name, code, progress, setHeaderTitle }) => {
  const navigate = useNavigate();
  const { aimagcode, soumcode } = useParams();

  return (
    <tr className="border-t">
      <td className="p-3 text-sm text-foreground">{name}</td>
      <td className="w-1/5 p-3 text-sm text-foreground">
        {progress && (
          <ProgressBar width="120px" percent={(progress.percent ?? 0) * 1} />
        )}
      </td>
      <td className="p-3 text-sm text-foreground">
        <span className="text-2xl font-bold text-primary w-16">
          {(progress?.percent ?? 0) * 1}%
        </span>
      </td>
      <td className="p-3 text-sm text-foreground">
        {progress && <Status percent={(progress.percent ?? 0) * 1} />}
      </td>
      <td className="p-3 text-sm text-foreground">
        <div className="w-full flex justify-center align-middle">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground rounded-md h-8 w-8 p-0 hover:bg-primary/10"
            onClick={(e) => {
              e.preventDefault();
              if (!soumcode) {
                setHeaderTitle((prev) => ({
                  ...prev,
                  [aimagcode ? "soumname" : "aimagname"]: name,
                }));
                navigate(`${code}`);
              }
            }}
            disabled={soumcode}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
