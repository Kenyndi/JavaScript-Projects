// Find two page elements by their IDs, append text to the first, and show it in the second.
function getElementsByIds(firstId, secondId) {
    // Retrieve the elements passed to the function.
    const firstElement = document.getElementById(firstId);
    const secondElement = document.getElementById(secondId);

    // Build the updated text and display it in the second element.
    let concatenatedString = firstElement.textContent;
    concatenatedString += " updated";
    secondElement.textContent = concatenatedString;

    // Return both elements in case the caller needs to use them.
    return { firstElement, secondElement };
}