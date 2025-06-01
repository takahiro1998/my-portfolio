const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('project-details');
const closeBtn = document.querySelector('.close');

    // 各プロジェクトの詳細（ここを増やせる）
const projectData = {
  1:"<h2>カリキュラム学習</h2><p>業務を行いながら、ITエンジニアとして1人前になるためのカリキュラムを受講しました。</p><h3>学習内容</h3><ul><li><span>言語</span>HTML / CSS / javascript / PHP / Laravel</li><li><span>データベース</span>MySQL</li><li><span>クラウド</span>AWS</li><li><span>課題</span>簡易SNSサイトの作成 / スクール予約サイトの改修</li></ul>",
  2: "<h2>大手メガバンクのHP改修</h2><p>大手メガバンクのホームページ改修のプロジェクトにコーダとして参画しました。主にページ制作を担当しました。</p><h3>参画期間</h3><p>2024.8~2024.12</p><h3>環境</h3><ul><li><span>使用言語</span></span>HTML / CSS / javascript</li><li><span>OS</span>Windows</li><li><span>ドキュメント</span>Excel</li><li><span>プロジェクト管理</span>Backlog , FileZilla</li><li><span>コミュニケーション</span>Slack</li></ul>",
  3: "<h2>RPGアプリゲームの検証業務</h2><p>シナリオ型RPGのテスターとして参画<br>複雑に交差するシナリオのため難関な検証作業となりました。</p><h3>参画期間</h3><p>2025.1~2025.4</p><h3>環境</h3><ul><li><span>OS</span></span>Windows / Android / iOS</li><li><span>ドキュメント</span>Confluence / Excel</li><li><span>プロジェクト管理</span>JIRA / Redmine / スプレッドシート</li><li><span>コミュニケーション</span>Teams</li></ul>",
  4: "<h2>着せ替えゲームの検証業務</h2><p>ロングセラーの着せ替えアプリゲームのQAテスターとして参画<br>何千ものアイテム数を誇る大型タイトルのため、検証パターンが多く、フリーテストの観点が培われました。</p><h3>参画期間</h3><p>2025.4~2025.5</p><h3>環境</h3><ul><li><span>OS</span></span>Windows / Android / iOS</li><li><span>ドキュメント</span>Confluence / Figma</li><li><span>プロジェクト管理</span>JIRA / スプレッドシート</li><li><span>コミュニケーション</span>Slack</li></ul>",
    };

    // リンククリックで表示
    document.querySelectorAll('.project-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        modalContent.innerHTML = projectData[projectId];
        modal.style.display = 'flex';
      });
    });

    // 閉じるボタン
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // 背景クリックでも閉じる
    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // 関連サイトのリンク遷移防止POP表示・非表示
    document.querySelectorAll('.not-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('production').classList.remove('hidden');
      });
    });

    document.getElementById('production-close').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('production').classList.add('hidden');
    })

//  コメント送信後のページ遷移防止+POP表示
document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  this.reset();
  alert('コメントありがとう！');
});
