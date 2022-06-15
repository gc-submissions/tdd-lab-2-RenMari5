const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 0;

    // Act
    let returnsCurrency = formatCurrency(amount);

    // Assert
    expect(returnsCurrency).toBe("$0.00");
  });
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 1;

    // Act
    let returnsCurrency = formatCurrency(amount);

    // Assert
    expect(returnsCurrency).toBe("$1.00");
  });
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 1.5;

    // Act
    let returnsCurrency = formatCurrency(amount);

    // Assert
    expect(returnsCurrency).toBe("$1.50");
  });
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 0.01;

    // Act
    let returnsCurrency = formatCurrency(amount);

    // Assert
    expect(returnsCurrency).toBe("$0.01");
  });
  test("Format number by rounding and displaying with two decimals", () => {
    // Arrange
    let amount = 0.01;

    // Act
    let returnsCurrency = formatCurrency(amount);

    // Assert
    expect(returnsCurrency).toBe("$0.01");
  });
});

describe("getCoins", () => {
  test("How many nickles, dimes, pennies, and quarters are required given the amount", () => {
    // Arrange
    let cents = 32;

    // Act
    let countCents = getCoins(32);

    // Assert
    expect(getCoins).toStrictEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
});
