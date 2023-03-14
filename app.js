const quiz = [
  {
    question: "桃園の誓いで義兄弟にならなかった人物は？",
    answers: ["劉備", "張飛", "関羽", "趙雲"],
    correct: "趙雲",
  },
  {
    question: "劉備が三顧の礼で迎えた人物は？",
    answers: ["諸葛亮", "諸葛瑾", "荀彧", "司馬懿"],
    correct: "諸葛亮",
  },
  {
    question: "袁紹の軍師に含まれない人物は？",
    answers: ["沮授", "田豊", "審配", "郭嘉"],
    correct: "郭嘉",
  },
  {
    question: "曹操の長男は？",
    answers: ["曹嵩", "曹昂", "曹丕", "曹宇"],
    correct: "曹昂",
  },
  {
    question: "諸葛亮の長男は？",
    answers: ["諸葛尚", "諸葛均", "諸葛瞻", "諸葛誕"],
    correct: "諸葛瞻",
  },
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const SetUpQuiz = () => {
  // $付きの変数、html属性であることを示している。
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while (btnIndex < buttonLen) {
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if (quizCount < quizLen) {
    SetUpQuiz(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if (elm.textContent === quiz[quizCount].correct) {
    $window.alert("正解!");
    score++;
    // setTimeout(function () {
    //   $question.textContent =
    //     "正解！現在のあなたのスコアは" + score + "/" + quizLen + "です";
    // }, 1000);
  } else {
    $window.alert("不正解!");
    // setTimeout(function () {
    //   $question.textContent =
    //     "不正解！現在のあなたのスコアは" + score + "/" + quizLen + "です";
    // }, 1000);
  }
  goToNext();
};

const showEnd = () => {
  setTimeout(function () {
    if (score < 3) {
      $question.textContent =
        "終了！あなたのスコアは" +
        score +
        "/" +
        quizLen +
        "で、三国志初心者ですね。横山光輝三国志をオススメします。";
    } else if (score === quizCount) {
      $question.textContent =
        "終了！あなたのスコアは" +
        score +
        "/" +
        quizLen +
        "ですね。今度三国志についてあなたと話をしたいです。";
    } else {
      $question.textContent =
        "終了！あなたのスコアは" +
        score +
        "/" +
        quizLen +
        "ですね。三国志中級者だと思います。";
    }

    const $items = $doc.getElementById("js-items");
    $items.style.visibility = "hidden";
  }, 1000);
};

SetUpQuiz();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while (answersIndex < answersLen) {
  $buttons[answersIndex].addEventListener("click", (e) => {
    setTimeout(judge(e.target), 100);
  });
  answersIndex++;
}
