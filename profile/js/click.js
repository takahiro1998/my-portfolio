// ハンバーガーメニューの閉じる動作
const menuLinks = document.querySelectorAll('.nav-menu');
const menuToggle = document.querySelector('.menu-btn');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
  });
});
