const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 0;

    // Act
    formatCurrency(amount);

    // Assert
    expect(amount).toBe("$0.00");
  });
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 1;

    // Act
    formatCurrency(amount);

    // Assert
    expect(amount).toBeCloseTo("$1.00");
  });
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});
