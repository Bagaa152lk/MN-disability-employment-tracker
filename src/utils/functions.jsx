export const numberFormat = (value, fixed = 0) => {
  if (value == null || isNaN(value)) return "";
  return value.toFixed(fixed).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
