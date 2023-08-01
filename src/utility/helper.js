export const converPriceToNumber = (priceString) => {
  if (typeof priceString !== "string") {
    return 0;
  }

  const numericPriceString = priceString.replace(/[^0-9.]/g, ""); // Remove any non-numeric characters
  return parseFloat(numericPriceString);
};
