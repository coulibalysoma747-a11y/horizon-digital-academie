// Menu mobile toggle
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('open');
  });
});

// Animation au scroll (fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .contact-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Ajouter la classe visible pour l'animation
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
