document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.ac_header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.closest('.accordion_one');
      accordion.classList.toggle('active');
    });
  });
});
