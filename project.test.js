import {
  capitalize,
  reverseString,
  calculator,
  cesarCipher,
  analyzeArray,
} from "./project.js"

test("capitalize first letter", () => {
  expect(capitalize("test string")).toBe("Test string")
})

test("reverse string", () => {
  expect(reverseString("string")).toBe("gnirts")
})

test("add", () => {
  expect(calculator.add(2, 2)).toBe(4)
})

test("substract", () => {
  expect(calculator.substract(2, 2)).toBe(0)
})

test("multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4)
})

test("divide", () => {
  expect(calculator.divide(2, 2)).toBe(1)
})

test("cesar cipher", () => {
  expect(cesarCipher("Hello,_[]World!", 3)).toBe("Khoor,_[]Zruog!")
})

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
