<?php 
$image_name = htmlspecialchars($_GET['id'], ENT_QUOTES, 'UTF-8').'.jpg';
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
    <meta property="og:title" content="新！名刺交換マナー" />
    <meta property="og:description" content="前田デザイン室発！
ついつい誰かにやってみたくなる、
令和時代の名刺交換は、これだ！
MKM48（名刺交換マナー48手）を、
みんなでやってみよう！" />
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
      data-text='ついつい誰かにやってみたくなる、
令和時代の名刺交換は、これだ！
MKM48（名刺交換マナー48手）を、
みんなでやってみよう！'
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