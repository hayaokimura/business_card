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
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
    <title>結果</title>
</head>
<body>
  <header>
      <div id='logo'>
          <img src="../img/logo.jpg" />
      </div>
  </header>
  <div id='contents'>
    <div class="title">
        <p>こうやって、<span class="green underline">名刺</span>を渡そう！</p>
        <p><span class="blue underline">今のキミらしさ</span>、伝えるために。</p>
    </div>
    <div class='result'><img src=<?='../img/poses/'.$image_name?> /></div>
    <div class='tweet-button'>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" 
      data-url=<?="http://".$_SERVER['HTTP_HOST']?>
      data-via='MaedaDesignRoom'
      data-text='名刺の渡し方'
      data-lang='ja'
      data-show-count="false">Tweet
      </a>
    </div><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <a href='/'>
      <div class="button" >
          <span>もう一回！</span>
      </div>
    </a>
  </div>
</body>
</html>