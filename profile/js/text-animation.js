document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.slideConts');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.3
  });
  targets.forEach(target => observer.observe(target));
});
