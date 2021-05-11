require("./randomElement");
const calculateAgeFn = require("./app");
const bdayArr = require("./data");
const randomElement = bdayArr.randomElement();

test(`Error handling OK`, () => {
  expect(
    calculateAgeFn(
      randomElement.year.toString(),
      randomElement.month,
      randomElement.day
    )
  ).toMatch(/error/);
  expect(
    calculateAgeFn(
      randomElement.year,
      randomElement.month.toString(),
      randomElement.day
    )
  ).toMatch(/error/);
  expect(
    calculateAgeFn(
      randomElement.year,
      randomElement.month,
      randomElement.day.toString()
    )
  ).toMatch(/error/);
});

test(`Check if ${randomElement.name}'s bday returns ${randomElement.result}`, () => {
  expect(
    calculateAgeFn(randomElement.year, randomElement.month, randomElement.day)
  ).toBe(randomElement.result);
});

test(`Check if the expected birthdate of Yacoub which is next July returns an error`, () => {
  expect(calculateAgeFn(2021, 7, 3)).toMatch(/error/);
});
