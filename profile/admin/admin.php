
<?php
$name = isset($_POST["username"]) ? htmlspecialchars($_POST["username"], ENT_QUOTES, 'UTF-8') : '';
$comment = isset($_POST["format"]) ? htmlspecialchars($_POST["format"], ENT_QUOTES, 'UTF-8') : '';
$time = date("Y-m-d H:i:s");
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../scss/admin.css">
</head>
<body>
  <header><div class="flex"><h1>管理ページ</h1></div></header>
  <section>
    <h2>コメント一覧</h2>
    <div class="comment_list">
      <div class="comment_list_title">
        <p class="username"><b><?php echo $name; ?></b><span><?php echo $time;?></span></p>
        <div class="delete"><button>削除</button></div>
      </div>
      <p class="yell_comment"><?php echo $comment; ?></p>
    </div>
  </section>

</body>
</html>
