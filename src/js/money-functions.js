function formatCurrency(amount) {
  if (amount < 0) {
    return ("$" + amount.toFixed(2)).format(number);
  }
}
// } else {
//   return (amount.toFixed(2).toLocaleString())};

function getCoins(cents) {}

module.exports = {
  formatCurrency,
  getCoins,
};
