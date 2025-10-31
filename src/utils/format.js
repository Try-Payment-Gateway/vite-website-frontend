export const formatCurrency = (value, currency = "IDR") => {
  if (!value) return "—";
  const num = parseFloat(value);
  if (isNaN(num)) return value;

  if (currency === "IDR") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(num);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(num);
};
