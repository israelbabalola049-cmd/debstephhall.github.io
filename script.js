// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}

// Enquiry form submission
function handleEnquiry(event) {
  event.preventDefault();
  alert('Thank you for your enquiry! We will get back to you soon.');
  event.target.reset();
}

