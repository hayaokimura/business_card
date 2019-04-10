<?php 
$image_name = htmlspecialchars($_GET['image'], ENT_QUOTES, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- for twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@MaedaDesignRoom" />
    <meta property="og:url" content=<?="http://".$_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"]?> />
    <meta property="og:title" content="真！名刺交換" />
    <meta property="og:description" content="記事の要約（ディスクリプション）" />
    <meta property="og:image" content=<?="http://".$_SERVER['HTTP_HOST'].'/img/poses/'.$image_name?> />
    <title>結果</title>
</head>
<body>
  <img src=<?='../img/poses/'.$image_name?> />  
</body>
</html>