// JavaScript file - index.js
const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  // Toggle Nav
  navLinks.classList.toggle("open");
  // Animate Links
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  // Burger Animation
  hamburger.classList.toggle("toggle");
});

function handleResize() {
  if (window.innerWidth <= 900) {
    hamburger.style.display = "block";
    navLinks.style.display = "none";
  } else {
    hamburger.style.display = "none";
    navLinks.style.display = "block";
  }
}

// Initial check on page load
handleResize();

// Listen for window resize
window.addEventListener("resize", handleResize);
