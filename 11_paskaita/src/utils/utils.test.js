import { multiply, lowerCase } from "./index";

test("multiply", () => {
  //7===5 false
  expect(7).toBe(5);
  expect(multiply(3, 3)).toBe(9);
  expect(multiply("a", 5)).toBe(NaN);
  expect(multiply(-3, -3)).toBe(9);
});

test("lowercase", () => {
  expect(lowerCase("Julija")).toBe("julija");
  expect(lowerCase("DOG")).toBe("dog");
  expect(lowerCase("cat")).toBe("cat");
  expect(lowerCase("kiNg")).toBe("king");
});
