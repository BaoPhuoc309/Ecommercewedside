export const convertPriceToNumber = (priceStr) => {
  // Loại bỏ các ký tự không phải số và dấu phẩy
  const cleanedPriceStr = priceStr.toString().replace(/[^0-9,.]/g, "");

  // Loại bỏ dấu phẩy nếu có
  const numericPriceStr = cleanedPriceStr.replace(/,/g, "");

  // Chuyển chuỗi thành số
  const priceNumber = parseFloat(numericPriceStr);

  // Kiểm tra xem có phải là một số hợp lệ không
  if (!isNaN(priceNumber)) {
    return priceNumber;
  }

  return null; // Trả về null nếu không thể chuyển đổi thành số hợp lệ
};
