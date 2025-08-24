// Initialize AOS animations
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Toggle dark mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

