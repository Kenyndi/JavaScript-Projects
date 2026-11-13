// This global variable can be accessed by functions throughout this script.
var globalVariable = "I am available throughout this script.";

function showScope() {
    // This local variable is only available inside showScope().
    var localVariable = "I am only available inside showScope().";

    // Log both variables to compare their values and scope.
    console.log(globalVariable);
    console.log(localVariable);
}

function addNumbers() {
    var firstNumber = 5;
    var secondNumber = 3;
    // Intentional bug for debugging practice: this should use + instead of -.
    var result = firstNumber - secondNumber;

    // Compare the expected sum with the actual result in Chrome DevTools.
    console.log("First number:", firstNumber);
    console.log("Second number:", secondNumber);
    console.log("Expected sum:", firstNumber + secondNumber);
    console.log("Actual result:", result);
}

function Time_function() {
    // Get the current hour using the browser's local time.
    var hour = new Date().getHours();
    var greeting;

    // Choose a greeting based on the time of day.
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting in the paragraph with the matching id.
    document.getElementById("greeting").textContent = greeting;
}

function checkNumber() {
    var number = 7;

    // Log a message only when the number is positive.
    if (number > 0) {
        console.log(number + " is positive.");
    }
}

function greetUser() {
    // Read the entered name and locate the paragraph for the response.
    var name = document.getElementById("nameInput").value.trim();
    var message = document.getElementById("inputMessage");

    // Show a personalized greeting or ask for a name if the field is empty.
    if (name) {
        message.textContent = "Hello, " + name + "!";
    } else {
        message.textContent = "Please enter your name.";
    }
}

// Run the examples and show the time-based greeting when the page loads.
showScope();
addNumbers();
Time_function();
checkNumber();

// Update the name response as the user types.
document.getElementById("nameInput").addEventListener("input", greetUser);