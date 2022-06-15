function formatCurrency(amount) {
  // new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });
  let currency = amount;
  if (currency < 0) {
    "-$" + currency.toFixed(2);
    return currency;
  } else {
    "$" + currency.toFixed(2);
    return currency;
  }
}

function getCoins(cents) {}

module.exports = {
  formatCurrency,
  getCoins,
};
