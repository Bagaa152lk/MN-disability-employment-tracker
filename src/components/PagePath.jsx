import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PagePath({ title, subtitle, changeDataList }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4 mb-4">
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 rounded-md text-white hover:bg-white/20 p-2"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
          changeDataList();
        }}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-white/90 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default PagePath;
