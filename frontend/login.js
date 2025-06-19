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

// password toggle    
document.querySelectorAll('.toggle-password').forEach(button => {
  button.addEventListener('click', function() {
    const input = this.closest('.password-wrapper').querySelector('input');
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
  });
});

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Basic validation example
  if (!email.includes('@')) {
    alert('Please enter a valid email!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters!');
    return;
  }

  // Simulate successful login
  console.log('Logging in with:', { email, password });
  
});