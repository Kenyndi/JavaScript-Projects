// Add two values and show their sum in the matching paragraph.
function addition_Function() {
    document.getElementById("Math").textContent = 2 + 2;
}

// Subtract the second value from the first and display the difference.
function subtraction_Function() {
    document.getElementById("Subtraction").textContent = 5 - 2;
}

// Multiply two values and display the product.
function multiplication_Function() {
    document.getElementById("Multiplication").textContent = 6 * 3;
}

// Divide the first value by the second and display the quotient.
function division_Function() {
    document.getElementById("Division").textContent = 12 / 4;
}

// Combine arithmetic operators in one expression and display the result.
function multiple_Operations_Function() {
    document.getElementById("MultipleOperations").textContent = (10 + 5) * 2 - 8 / 4;
}

// Use the remainder operator to show what remains after division.
function modulus_Function() {
    document.getElementById("Modulus").textContent = "The remainder of 21 % 5 is " + (21 % 5);
}

// Apply the unary minus operator to show the opposite of a positive value.
function negation_Function() {
    document.getElementById("Negation").textContent = "The negation of 10 is " + -10;
}

// Increase the starting value by one with the increment operator.
function increment_Function() {
    let number = 5;
    number++;
    document.getElementById("Increment").textContent = "5 incremented is " + number;
}

// Decrease the starting value by one with the decrement operator.
function decrement_Function() {
    let number = 5;
    number--;
    document.getElementById("Decrement").textContent = "5 decremented is " + number;
}

// Generate and display a new random decimal between 0 (inclusive) and 1.
function random_Function() {
    document.getElementById("Random").textContent = "Random number: " + Math.random();
}

// Round a decimal to the nearest whole number using a Math object method.
function math_Method_Function() {
    document.getElementById("MathMethod").textContent = "Math.round(4.7) = " + Math.round(4.7);
}