  // stars
  const starsEl = document.getElementById('stars');
  const starCount = window.innerWidth < 700 ? 30 : 60;
  for (let i = 0; i < starCount; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 85 + '%';
    s.style.animationDelay = (Math.random() * 4) + 's';
    starsEl.appendChild(s);
  }

  //Partner
  document.querySelectorAll('.partner-card').forEach(card => {
  card.style.cursor = 'pointer';

  card.addEventListener('click', () => {
    window.open('https://forms.gle/na6PNaBTK9S9FvDr6', '_blank');
  });
});

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
