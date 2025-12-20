<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <title>Mini App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>

<h2>🟢 點擊賺分</h2>
<button id="earn">點我 +1</button>

<p id="score">分數：0</p>

<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
  let score = 0;

  document.getElementById('earn').onclick = () => {
    score++;
    document.getElementById('score').innerText = '分數：' + score;
  };

  // Telegram WebApp API（可選）
  const tg = window.Telegram.WebApp;
  tg.ready();
</script>

</body>
</html>
