const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
} = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("When payment is 5 and total is 6, then our change will be 1", () => {
    // Arrage
    const total = 5;
    const payment = 6;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBe(1);
  });
  test("When payment is 13.03 and total is 12.30, then our change will be 0.73", () => {
    // Arrage
    const total = 12.3;
    const payment = 13.03;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBeCloseTo(0.73);
  });
  test("When payment is 25 and total is 20, then our change will be 5", () => {
    // Arrage
    const total = 20;
    const payment = 25;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBe(5);
  });
});

describe("isSufficientPayment", () => {
  test("When payment is 5 and total is 6, then isSufficientPayment to return true", () => {
    // Arrange
    const total = 5;
    const payment = 6;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Calculates the total with one item and expects it to be 4.99", () => {
    // Arrange
    const item = [{ name: "ball", price: 4.99 }];

    // Act
    const total = calculateTotal(item);

    // Assert
    expect(total).toEqual(4.99);
  });
  test("Calculates the total with three items and expects it to be 16.52", () => {
    // Arrange
    const item = [
      { name: "ball", price: 3.5 },
      { name: "ball", price: 12.99 },
      { name: "ball", price: 0.03 },
    ];

    // Act
    const total = calculateTotal(item);

    // Assert
    expect(total).toBeCloseTo(16.52);
  });
  test("Calculates the total with zero items and expects it to be 0", () => {
    // Arrange
    const item = [];

    // Act
    const total = calculateTotal(item);

    // Assert
    expect(total).toBeCloseTo(0);
  });
  test("Calculates the total with five items and expects it to be 16.57", () => {
    // Arrange
    const item = [
      { name: "ball", price: 3.5 },
      { name: "ball", price: 12.99 },
      { name: "ball", price: 0.03 },
      { name: "ball", price: 0.05 },
    ];

    // Act
    const total = calculateTotal(item);

    // Assert
    expect(total).toBeCloseTo(16.57);
  });
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});
