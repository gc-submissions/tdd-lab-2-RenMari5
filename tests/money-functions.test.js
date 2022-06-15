const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 0;

    // Act
    formatCurrency(amount);

    // Assert
    expect(amount).toMatch("$0.00");
  });
});

describe("getCoins", () => {
  test("How many nickles, dimes, pennies, and quarters are required given the amount", () => {});
});
