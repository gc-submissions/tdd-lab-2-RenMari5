function formatCurrency(amount) {
  // new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });
  let currency = amount;
  if (currency >= 0) {
    return "$" + currency.toFixed(2);
  } else {
    return "-$" + Math.abs(currency).toFixed(2);
  }
}

function getCoins(cents) {
  // for (let sum = cents; sum > 0; sum--) {
  //   if (sum >= 25) {
  //     sum -= 25;
  //   } else if (sum >= 10) {
  //     sum -= 10;
  //   } else if (sum >= 5) {
  //     sum -= 5;
  //   } else if (sum >= 1) {
  //     sum -= 1;
  //   } else {
  //     return sum;
  //   }
  // let quarter = Math.floor(cents / 25);
  // let remainder = cents % 25;

  // let dime = Math.floor(remainder / 10);
  // remainder = remainder % 10;

  // let nickel = Math.floor(remainder / 5);
  // remainder = remainder % 5;

  // let penny = Math.floor(remainder / 1);
  // remainder = remainder % 1;

  for (cents; cents > 0; ) {
    if (cents >= 25) {
      remainder = cents % 25;
      amtInCoin = cents - remainder;
      quarters = amtInCoin / 25;
      cents = remainder;
    } else if (cents >= 10) {
      remainder = cents % 10;
      amtInCoin = cents - remainder;
      dimes = amtInCoin / 10;
      cents = remainder;
    } else if (cents >= 5) {
      remainder = cents % 5;
      amtInCoin = cents - remainder;
      nickels = amtInCoin / 5;
      cents = remainder;
    } else if (cents >= 1) {
      remainder = cents % 1;
      amtInCoin = cents - remainder;
      pennies = amtInCoin / 1;
      cents = remainder;
    }
  }

  return {
    quarters: quarter,
    dimes: dime,
    nickels: nickel,
    pennies: penny,
  };
}

module.exports = {
  formatCurrency,
  getCoins,
};
