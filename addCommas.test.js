const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it changes numbers to strings with commas", ()=>{
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(1000000)).toBe('1,000,000');
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  })

  test("it will correctly display a number that doesn't need commas", () => {
    expect(addCommas(6)).toBe('6');
  })

  test("it will correctly display a negative number", () => {
    expect(addCommas(-10)).toBe('-10');
    expect(addCommas(-104)).toBe('-104');
    expect(addCommas(-5678)).toBe('-5,678');
  })
});
