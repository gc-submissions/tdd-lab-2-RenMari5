function calculateChange(payment, total) {
  return payment - total;
}

// function isSufficientPayment(payment, total) {
//   //   if (payment >= total) {
//   //     return true;
//   //   } else {
//   //     return false;

//   // Refactor
//   return payment >= total ? true : false;

//   // Refactor
//   return payment >= total;
// }

// Refactor
const isSufficientPayment = (payment, total) => payment >= total;

function calculateTotal(itemsArray) {
  let sum = 0;
  itemsArray.forEach((item) => (sum += item.price));
  return sum;
}

module.exports = { calculateChange, isSufficientPayment, calculateTotal };
