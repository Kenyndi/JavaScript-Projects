// Cache the countdown controls so event handlers can reuse them.
const secondsInput = document.getElementById("seconds");
const startCountdownButton = document.getElementById("start-countdown");
const timerDisplay = document.getElementById("timer");
let countdownTimeout;

// Start a fresh countdown using the number entered by the user.
function countdown() {
    const enteredSeconds = Number(secondsInput.value);

    // Reject empty, fractional, zero, or negative durations before scheduling a timer.
    if (!Number.isInteger(enteredSeconds) || enteredSeconds < 1) {
        timerDisplay.textContent = "Enter a whole number of seconds greater than zero.";
        secondsInput.focus();
        return;
    }

    // Cancel an earlier countdown if the user starts another one.
    clearTimeout(countdownTimeout);
    startCountdownButton.disabled = true;
    secondsInput.disabled = true;

    let remainingSeconds = enteredSeconds;

    // Show each remaining second and schedule the next update one second later.
    function tick() {
        timerDisplay.textContent = `${remainingSeconds} second${remainingSeconds === 1 ? "" : "s"} remaining`;

        if (remainingSeconds === 0) {
            timerDisplay.textContent = "Time's up!";
            startCountdownButton.disabled = false;
            secondsInput.disabled = false;
            alert("Time's up!");
            return;
        }

        remainingSeconds -= 1;
        countdownTimeout = setTimeout(tick, 1000);
    }

    tick();
}

// Connect the countdown button without relying on inline HTML event handlers.
startCountdownButton.addEventListener("click", countdown);

// Collect the slides and controls used by the slideshow.
const slides = Array.from(document.querySelectorAll(".slide"));
const previousSlideButton = document.getElementById("previous-slide");
const nextSlideButton = document.getElementById("next-slide");
const slideIndicators = document.getElementById("slide-indicators");
let activeSlideIndex = 0;

// Build one accessible indicator button for each slide.
slides.forEach((slide, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("aria-label", `Show slide ${index + 1}`);
    indicator.addEventListener("click", () => showSlide(index));
    slideIndicators.appendChild(indicator);
});

// Display the selected slide and keep its indicator in sync.
function showSlide(index) {
    activeSlideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeSlideIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
        slideIndicators.children[slideIndex].setAttribute("aria-current", String(isActive));
    });
}

// Move backward or forward from the currently displayed slide.
previousSlideButton.addEventListener("click", () => showSlide(activeSlideIndex - 1));
nextSlideButton.addEventListener("click", () => showSlide(activeSlideIndex + 1));

// Initialize the slideshow so the first slide and indicator are selected.
showSlide(activeSlideIndex);