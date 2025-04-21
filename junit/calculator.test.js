function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

describe("Calculator", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtract", () => {
    expect(subtract(3, 1)).toBe(2);
  });
});
