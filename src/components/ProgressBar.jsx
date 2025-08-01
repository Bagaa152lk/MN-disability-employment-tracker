const ProgressBar = ({ percent, viewPercent = false }) => (
  <div className="space-y-2">
    <div className="relative">
      <div
        className="w-full h-3 overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (percent ?? 0) * 1}%)` }}
        />
      </div>
      <div
        className={`absolute top-0 left-0 h-3 rounded-full ${
          (percent ?? 0) * 1 < 40
            ? "bg-danger"
            : (percent ?? 0) * 1 >= 40 && (percent ?? 0) * 1 <= 60
            ? "bg-warning"
            : "bg-success"
        } transition-all duration-300`}
        style={{ width: `${(percent ?? 0) * 1}%` }}
      />
    </div>

    {viewPercent && (
      <span className="text-2xl font-bold text-primary w-16">
        {(percent ?? 0) * 1}%
      </span>
    )}
  </div>
);

export default ProgressBar;
