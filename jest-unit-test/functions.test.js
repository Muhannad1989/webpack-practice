const functions = require("./functions");

test("add tow numbers", () => {
  expect(functions.add(4, 4)).toBe(8);
});
