let intervalId; // color: white; /* Declares a variable to store the ID of the interval */

function getRandomColor() {
    const letters = "0123456789ABCDEF"; // color: white; /* String containing all hexadecimal digits */
    let color = "#"; // color: white; /* Initializes the color string with a hash symbol */
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // color: white; /* Appends a random hex digit to the color string */
    }
    return color; // color: white; /* Returns the final color string */
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor(); // color: white; /* Changes the background color of the body to a random color */
}

function startColorChange() {
    toggleVisibility('info1') // color: white; /* Toggles the visibility of an element with ID 'info1' */
    intervalId = setInterval(changeBackgroundColor, 5);  // color: white; /* Sets an interval to repeatedly change background color every 5 milliseconds */
}