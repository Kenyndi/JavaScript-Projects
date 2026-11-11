function Ride_Function() {
    var Height, Can_ride;
    // Read the rider's height directly from the browser input.
    Height = document.getElementById("Height").value;
    // Use a ternary operation to choose the message based on the 52 cm minimum.
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    // Show the result in the paragraph below the input.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Define a constructor whose properties are assigned to the new object's this value.
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

function New_and_This_Function() {
    // Create a Vehicle instance by calling the constructor with new.
    var vehicle = new Vehicle("Toyota", "Corolla", 2024, "blue");
    // Display details from the constructed object in the page.
    document.getElementById("New_and_This").innerHTML =
        "My vehicle is a " + vehicle.color + " " + vehicle.year + " " + vehicle.make + " " + vehicle.model + ".";
}

function Count_Function() {
    // This helper is nested inside Count_Function and adds five to its argument.
    function addFive(number) {
        return number + 5;
    }

    // Display the nested function's result when the paragraph is clicked.
    document.getElementById("Nested_Function").innerHTML = addFive(10);
}