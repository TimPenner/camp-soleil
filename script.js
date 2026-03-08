// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  form.style.display = 'none';

  const msg = document.createElement('div');
  msg.className = 'success-msg show';
  msg.innerHTML = `
    <div class="checkmark">🎉</div>
    <h3>Application received!</h3>
    <p>Thank you for applying to Camp Soleil. Patricia and Francesca will review your application and reply personally by email within 24–48 hours. Payment details will be provided upon acceptance via e-Transfer.</p>
  `;
  form.parentNode.appendChild(msg);
}

// Animate evaluation bars on scroll into view
const fills = document.querySelectorAll('.ecm-fill');
const evalSection = document.getElementById('evaluation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fills.forEach(fill => {
        const w = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => { fill.style.width = w; }, 100);
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

if (evalSection) observer.observe(evalSection);
