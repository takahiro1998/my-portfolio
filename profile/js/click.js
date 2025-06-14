// ハンバーガーメニューの閉じる動作
const menuLinks = document.querySelectorAll('.nav-menu');
const menuToggle = document.querySelector('.menu-btn');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
  });
});

// 関連サイトのリンク遷移防止POP表示・非表示
document.querySelectorAll('.not-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('production').classList.remove('hidden');
  })
});

document.getElementById('production-close').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('production').classList.add('hidden');
});

//  コメント送信後のページ遷移防止+POP表示
document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = this.username.value;
  const comment = this.format.value;

  if (!username || !comment) {
    alert('お名前とコメント両方を入力の上、送信ください。');
    return;
  }

  alert('コメントありがとう！');
  this.reset();
});
