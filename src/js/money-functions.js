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

function getCoins(cents) {
  for (let sum = cents; sum > 0; sum--) {
    if (sum >= 25) {
      sum -= 25;
    } else if (sum >= 10) {
      sum -= 10;
    } else if (sum >= 5) {
      sum -= 5;
    } else if (sum >= 1) {
      sum -= 1;
    } else {
      return sum;
    }
  }
}

module.exports = {
  formatCurrency,
  getCoins,
};
