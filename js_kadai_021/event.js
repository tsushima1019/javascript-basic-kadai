// ボタンとテキストの要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  // 2秒後にテキストを書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});