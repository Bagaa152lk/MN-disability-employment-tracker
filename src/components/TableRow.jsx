import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import { ChevronRight } from "lucide-react";
import ApiService from "../services/ApiService";

const TableRow = ({ name, code }) => {
  const [progress, setProgress] = useState(null);

  const getProgress = () => {
    ApiService("get", `/progress/${code}`)
      .then((res) => {
        setProgress(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProgress();
  }, []);

  return (
    <tr className="border-t">
      <td className="p-3 text-sm text-foreground">{name}</td>
      <td className="p-3 text-sm text-foreground">
        {progress && (
          <ProgressBar
            width="120px"
            percent={(progress.percent ?? 0) * 1}
            viewPercent={true}
          />
        )}
      </td>
      <td className="p-3 text-sm text-foreground">
        {progress && <Status percent={(progress.percent ?? 0) * 1} />}
      </td>
      <td className="p-3 text-sm text-foreground">
        <div className="w-full flex justify-center align-middle">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground rounded-md h-8 w-8 p-0 hover:bg-primary/10">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
