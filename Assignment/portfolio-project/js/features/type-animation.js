const roles = [
    "Full-Stack Developer",
    "MERN Enthusiast",
    "Competitive Programmer",
    "Frontend Developer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");
    if (!element) return;

    let currentWord = roles[index];

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    element.textContent = currentWord.slice(0, charIndex);

    // Typing complete
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    // Deleting complete
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start animation after page loads
document.addEventListener("DOMContentLoaded", typeEffect);