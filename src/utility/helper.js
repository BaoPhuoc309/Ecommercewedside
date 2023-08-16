export const calculateAverageRating = (comments) => {
  if (comments.length === 0) {
    return 0; // Trả về 0 nếu không có đánh giá nào
  }

  const totalRating = comments.reduce(
    (total, comment) => total + comment.rating,
    0
  );
  const averageRating = totalRating / comments.length;
  return averageRating;
};
