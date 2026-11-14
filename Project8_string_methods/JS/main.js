const firstString = "String methods";
const secondString = "can connect";
const thirdString = " multiple strings.";
const completeString = firstString.concat(" ", secondString, thirdString);

document.getElementById("output").textContent = completeString;
document.getElementById("slice-output").textContent = completeString.slice(0, 14);

const numberAsString = (42).toString();
document.getElementById("number-output").textContent = numberAsString;
// Join three strings and return the combined text.
function showConcatenatedStrings() {
    const firstString = "String methods";
    const secondString = "can connect";
    const thirdString = " multiple strings.";
    return firstString.concat(" ", secondString, thirdString);
}

// Return the first 14 characters of the combined text.
function showStringSlice() {
    return showConcatenatedStrings().slice(0, 14);
}

// Convert a number to a string and return the result.
function showNumberAsString() {
    return (42).toString();
}

// Format the number to five significant digits and return it as a string.
function showNumberPrecision() {
    return (123.456).toPrecision(5);
}

// Display each method's result in its matching paragraph.
document.getElementById("output").textContent = showConcatenatedStrings();
document.getElementById("slice-output").textContent = showStringSlice();
document.getElementById("number-output").textContent = showNumberAsString();
document.getElementById("precision-output").textContent = showNumberPrecision();