// Store the dictionary entries as key-value pairs.
const dictionary = {
    greeting: "Hello",
    language: "JavaScript",
    project: "Dictionary"
};

function displayDictionary() {
    // Remove the greeting key before displaying its value.
    delete dictionary.greeting;

    // Show a remaining entry and the deleted entry's now-undefined value.
    document.getElementById("Dictionary").innerHTML =
        `language: ${dictionary.language}<br>greeting after deletion: ${dictionary.greeting}`;
}