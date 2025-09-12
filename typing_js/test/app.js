const questions = [
  "JavaScript",
  "タイピングゲーム",
  "サンプル問題",
  "Hello World"
];
const questionElem = document.getElementById('question');
const answerElem = document.getElementById('answer');
const startBtn = document.getElementById('start');
const resultElem = document.getElementById('result');
let current = 0;
let startTime;

startBtn.onclick = () => {
  current = 0;
  resultElem.textContent = "";
  answerElem.value = "";
  answerElem.disabled = false;
  questionElem.textContent = questions[current];
  startTime = Date.now();
  answerElem.focus();
};

answerElem.oninput = () => {
  if (answerElem.value === questions[current]) {
    current++;
    answerElem.value = "";
    if (current < questions.length) {
      questionElem.textContent = questions[current];
    } else {
      let sec = ((Date.now() - startTime) / 1000).toFixed(2);
      resultElem.textContent = `クリア！時間：${sec}秒`;
      answerElem.disabled = true;
      questionElem.textContent = "";
    }
  }
};
