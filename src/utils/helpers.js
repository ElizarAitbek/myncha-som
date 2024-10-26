export const formatDate = (currentDate) => {
  const date = new Date(currentDate).toLocaleDateString("en-EN", {
    month: "short",
    day: "numeric",
    year: "2-digit",
  });

  return date;
};

// const totalAmount = expenses.reduce((total, expense) => {
//   total + expense.amount
// }, 0);
