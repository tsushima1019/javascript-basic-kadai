// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
const scoreDisplay = document.getElementById('scoreDisplay'); // タイプ数表示用要素

// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

// ランダムなテキストを表示
const createText = () => {
  // 正タイプした文字列をクリア
  typed = '';
  typedfield.textContent = typed;

  // 配列のインデックスからランダムな数値を生成
  let random= Math.floor(Math.random() * textLists.length);

  // ランダムテキストを取得し画面に表示
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};

// キー入力の判定
const keyPress = e => {
  // 誤タイプの場合
  if(e.key !== untyped.substring(0, 1)) {
    wrap.classList.add('mistyped');
    // 100ms後に背景色を元に戻す
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100);
    return;
  }

  // 正タイプの場合
  score++;
  // タイプ数表示の更新
  scoreDisplay.textContent = `タイプ数: ${score}`;

  wrap.classList.remove('mistyped');
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;

  // テキストがなくなったら新しいテキスト表示
  if(untyped === '') {
    createText();
  }
};

// タイピングスキルのランク判定
const rankCheck = score => {
  let text = '';
  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;    
  } else if(score < 300) {
    text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;    
  } else if(score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます!`;    
  }
  return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ゲーム終了処理
const gameOver = id => {
  clearInterval(id);

  const result = confirm(rankCheck(score));

  if(result == true) {
    window.location.reload();
  }
};

// カウントダウンタイマー
const timer = () => {
  let time = count.textContent;

  const id = setInterval(() => {
    time--;
    count.textContent = time;

    if(time <= 0) {
      gameOver(id);
    }
  }, 1000);
};

// ゲームスタート時の処理
start.addEventListener('click', () => {
  timer();
  createText();
  start.style.display = 'none';
  document.addEventListener('keypress', keyPress);
});

// 初期表示
untypedfield.textContent = 'スタートボタンで開始';
