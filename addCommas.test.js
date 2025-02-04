const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

test("1234 as '1,234'", () => {
  expect(addCommas(1234)).toBe("1,234");
});

test("1000000 as '1,000,000'", () => {
  expect(addCommas(1000000)).toBe("1,000,000");
});

test("handles large numbers", () => {
  expect(addCommas(123456789012345)).toBe("123,456,789,012,345");
});

test("does not add commas for single digit numbers", () => {
  expect(addCommas(6)).toBe("6");
});

test("handles negative numbers correctly", () => {
  expect(addCommas(-10)).toBe("-10");
  expect(addCommas(-5678)).toBe("-5,678");
});

