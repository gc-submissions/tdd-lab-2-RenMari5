const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
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
  test("Adds newItem to the array", () => {
    // Arrange
    let itemsArray = [];
    let name = "Beans";
    let price = 3;

    // Act
    addItem(itemsArray, name, price);

    // Assert
    expect(itemsArray).toContainEqual({ name: "Beans", price: 3 });
  });
  test("Adds newItem to the array with one item", () => {
    // Arrange
    let itemsArray = [{ name: "Beans", price: 3 }];
    let name = "Sugar";
    let price = 2;

    // Act
    addItem(itemsArray, name, price);

    // Assert
    expect(itemsArray).toHaveLength(2);
    expect(itemsArray).toContainEqual({ name: "Beans", price: 3 });
    expect(itemsArray).toContainEqual({ name: "Sugar", price: 2 });
  });
  test("Adds newItem to the array with one item", () => {
    // Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Tomatoes", price: 5 },
    ];
    let name = "Coffee";
    let price = 4;

    // Act
    addItem(itemsArray, name, price);

    // Assert
    expect(itemsArray).toHaveLength(4);
  });
});

describe("removeItem", () => {
  test("Removes one item from the array at a given index", () => {
    // Arrange
    let itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Sugar", price: 2 },
      { name: "Tomatoes", price: 5 },
    ];
    index = 1;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({ name: "Jelly", price: 3.5 });
    expect(itemsArray).toContainEqual({ name: "Tomatoes", price: 5 });
  });
  test("Removes the first item from the array of three items", () => {
    // Arrange
    let itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Sugar", price: 2 },
      { name: "Tomatoes", price: 5 },
    ];
    let index = 0;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({ name: "Sugar", price: 2 });
    expect(itemsArray).toContainEqual({ name: "Tomatoes", price: 5 });
  });
  test("Removes the last item from the array of three items", () => {
    // Arrange
    let itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Sugar", price: 2 },
      { name: "Tomatoes", price: 5 },
    ];
    let index = 2;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({ name: "Jelly", price: 3.5 });
    expect(itemsArray).toContainEqual({ name: "Sugar", price: 2 });
  });
  test("Removes the middle item from an array of three items", () => {
    // Arrange
    let itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Sugar", price: 2 },
      { name: "Tomatoes", price: 5 },
    ];
    index = 1;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({ name: "Jelly", price: 3.5 });
    expect(itemsArray).toContainEqual({ name: "Tomatoes", price: 5 });
  });
  // test("Removes the only item from an array of one item", () => {
  //   // Arrange
  //   let itemsArray = [{ name: "Tomatoes", price: 5 }];
  //   index = 0;

  //   // Act
  //   removeItem(itemsArray, index);

  //   // Assert
  //   expect(itemsArray).toHaveLength(0);
  // });
});
