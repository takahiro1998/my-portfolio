
<?php
$name = isset($_POST["username"]) ? htmlspecialchars($_POST["username"], ENT_QUOTES, 'UTF-8') : '';
$comment = isset($_POST["format"]) ? htmlspecialchars($_POST["format"], ENT_QUOTES, 'UTF-8') : '';
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
  <header><div class="flex"><h1>Portfolio</h1></div></header>
  <h1>コメント一覧A</h1>
  <ul>
    <li><?php echo $name; ?></li>
    <li><?php echo $comment; ?></li>
  </ul>
</body>
</html>
