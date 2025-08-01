const Status = ({ percent }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-white ${
        percent < 40
          ? "bg-danger"
          : percent >= 40 && percent <= 60
          ? "bg-warning"
          : "bg-success"
      }`}
    >
      {percent < 40
        ? "Бага"
        : percent >= 40 && percent <= 60
        ? "Дундаж"
        : percent > 60
        ? "Ихэнх"
        : "Тодорхойгүй"}
    </div>
  );
};

export default Status;
