//shrink navbar
window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 80) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    });

// hamburger menu toggle for mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });



