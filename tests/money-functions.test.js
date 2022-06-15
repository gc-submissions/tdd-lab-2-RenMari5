describe("formatCurrency", () => {
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 0;

    // Act
    formatCurrency(amount);

    // Assert
    expect(amount).toBeCloseTo("$0.00");
  });
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});

module.exports = {
  formatCurrency,
  getCoins,
};
