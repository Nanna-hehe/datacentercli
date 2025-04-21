const {
  Given,
  When,
  Then,
  After,
} = require("@cucumber/cucumber");
const assert = require("assert");

let number1, number2, result;

Given("I have the number {int}", function (num) {
  number1 = num;
});

Given(
  "I have another number {int}",
  function (num) {
    number2 = num;
  },
);

When("I increase it by {int}", function (number2) {
  result = number1 + number2;
});

When(
  "I subtract {int} from it",
  function (number2) {
    result = number1 - number2;
  },
);

Then(
  "the result should return {int}",
  function (expectedResult) {
    assert.strictEqual(result, expectedResult);
  },
);

After(function () {
  this.attach('{"name": "some JSON"}', {
    mediaType: "application/json",
  });
});
