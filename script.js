// JOIN BUTTON
const joinBtn = document.getElementById('join-btn');
const joinMsg = document.getElementById('join-msg');

joinBtn.addEventListener('click', () => {
  joinMsg.style.display = 'block';
  joinBtn.style.display = 'none';
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// FADE IN ON SCROLL
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// CAROUSEL
const track = document.getElementById('carousel-track');
const slides = document.querySelectorAll('.slide');
const dotsWrap = document.getElementById('carousel-dots');
let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(index) {
  current = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

document.getElementById('prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('next').addEventListener('click', () => goTo(current + 1));

setInterval(() => goTo(current + 1), 3500);