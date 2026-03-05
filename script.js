// display none toggle function
function toggleDNone(id) {
    document.getElementById(id).classList.toggle('d_none');
}

// elements
const dateInput = document.getElementById("date_input");
const passwordInput = document.getElementById("password_input");
const button = document.getElementById("toggle_button");

// ---- DATE CHECK ----
dateInput.addEventListener("change", function () {
    const inputDate = new Date(dateInput.value);
    const currentDate = new Date();

    if (inputDate > currentDate) {
        alert("The date is in the future!");
        passwordInput.classList.add("d_none");
    } 
    else if (inputDate.toDateString() === currentDate.toDateString()) {
        alert("The date is today!");
        passwordInput.classList.remove("d_none");
    } 
    else {
        alert("The date is in the past!");
        passwordInput.classList.add("d_none");
    }
});

// ---- PASSWORD STAGES ----
let keyCount = 0;
let stage1Triggered = false;
let stage2Triggered = false;

passwordInput.addEventListener("keyup", function () {
    const value = passwordInput.value.toLowerCase();

    // Stage 1
    if (!stage1Triggered && value.startsWith("passw")) {
        alert('Are you seriously typing "password" -__-');
        stage1Triggered = true;
        keyCount = 0; // reset key count for stage 2
        return; // exit early to avoid triggering stage 2 hint immediately
    }

    // Stage 2
    if (stage1Triggered && !stage2Triggered) {
        keyCount++;
        if (keyCount >= 22) { // "letmein" has 7 characters, so we check for 8 to ensure the user has typed it fully
            alert('Here’s a hint: let me in - without the spaces');
            stage2Triggered = true;
        }
    }

    // Stage 3
    if (value === "letmein") {
        button.classList.remove("d_none");
    }
});

// ---- ESCAPING BUTTON ----
button.style.transition = "all .8s ease-in-out";

button.addEventListener("mouseover", function () {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});