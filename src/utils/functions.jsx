export const numberFormat = (value) => {
  if (value == null || isNaN(value)) return "";
  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
