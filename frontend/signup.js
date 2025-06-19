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



// Password Toggle
document.querySelector('.toggle-password').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Password Strength (Basic)
document.getElementById('password').addEventListener('input', function() {
  const strengthBar = document.querySelector('.password-strength');
  const strength = Math.min(this.value.length / 8, 1); // 8+ chars = full strength
  strengthBar.style.width = `${strength * 100}%`;
  strengthBar.style.background = strength < 0.5 ? '#ff4d4d' : 
                                strength < 0.8 ? '#ffcc00' : '#4CAF50';
});