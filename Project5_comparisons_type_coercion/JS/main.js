// Set up a number, show its type, and demonstrate coercion to a string.
var sample = 5;
var coercedSample = sample + "";

// Multiplying the largest finite number by 2 overflows to positive or negative infinity.
var largePositiveNumber = Number.MAX_VALUE * 2;
var largeNegativeNumber = Number.MAX_VALUE * -2;

// document.write displays the type of the sample variable in the page.
document.write("<p>The data type of sample is: " + typeof sample + "</p>");

// Adding an empty string coerces the number to a string; this also combines text and a number.
document.getElementById("coerced-sample").textContent =
  'After coercion, sample + "" is ' + coercedSample + " (" + typeof coercedSample + ").";
document.getElementById("string-number-expression").textContent =
  "String and number expression: " + ("The number is " + sample);

// Display the positive and negative overflow values.
document.getElementById("positive-infinity").textContent = largePositiveNumber;
document.getElementById("negative-infinity").textContent = largeNegativeNumber;

// Relational operators compare the two numbers and return booleans.
document.getElementById("greater-than-result").textContent = 10 > 5;
document.getElementById("less-than-result").textContent = 3 < 2;

// Loose equality converts types when needed; strict equality requires matching types and values.
document.getElementById("equal-result").textContent = 5 == "5";
document.getElementById("not-equal-result").textContent = 5 == 6;
document.getElementById("strict-equal-result").textContent = 5 === 5;
document.getElementById("strict-different-type-value-result").textContent = 5 === "hello";
document.getElementById("strict-different-type-result").textContent = 5 === "5";
document.getElementById("strict-different-value-result").textContent = 5 === 6;

// AND is true only when both comparisons are true; OR is true when either is true.
document.getElementById("and-true-result").textContent = 5 > 3 && 10 > 5;
document.getElementById("and-false-result").textContent = 5 > 3 && 10 < 5;
document.getElementById("or-true-result").textContent = 5 > 3 || 10 < 5;
document.getElementById("or-false-result").textContent = 5 < 3 || 10 < 5;

// NOT reverses a boolean value.
document.getElementById("not-true-result").textContent = !false;
document.getElementById("not-false-result").textContent = !true;

// Log the result of a math operation in the browser's developer console.
console.log("Math operation: 12 + 8 =", 12 + 8);