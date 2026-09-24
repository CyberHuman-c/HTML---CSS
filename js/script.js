// questions, choices & answers

const quizInfo = [
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    choices: ["<footer>", "<bottom>", "<section>", "<aside>"],
    correct: "<footer>",
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    choices: ["<script>", "<link>", "<js>", "<javascript>"],
    correct: "<script>",
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    choices: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: "<h1>",
  },
  {
    question: "Which CSS property is used to create a flexbox layout?",
    choices: [
      "display: flex",
      "layout: flexbox",
      "flex: true",
      "display: grid",
    ],
    correct: "display: flex",
  },
  {
    question: "What is the purpose of the CSS z-index property?",
    choices: [
      "To change the color of an element",
      "To control the stacking order of positioned elements",
      "To set the width of an element",
      "To align text vertically",
    ],
    correct: "To control the stacking order of positioned elements",
  },
  {
    question: "Which CSS property controls the text size?",
    choices: ["text-style", "font-size", "text-size", "font-style"],
    correct: "font-size",
  },
  {
    question:
      "Which keyword is used to declare a block-scoped variable that cannot be reassigned?",
    choices: ["var", "let", "const", "static"],
    correct: "const",
  },
  {
    question: "How do you attach an event handler to an element in JavaScript?",
    choices: [
      "element.attachEvent()",
      "element.addEventListener()",
      "element.listen()",
      "element.on()",
    ],
    correct: "element.addEventListener()",
  },
  {
    question: "What does the `Array.prototype.push()` method do?",
    choices: [
      "Removes the last element from an array",
      "Adds one or more elements to the end of an array",
      "Reverses the elements in an array",
      "Combines two arrays into one",
    ],
    correct: "Adds one or more elements to the end of an array",
  },
  {
    question: "What value is returned by `typeof null` in JavaScript?",
    choices: ['"null"', '"undefined"', '"object"', '"boolean"'],
    correct: '"object"',
  },
];

// for intro page
const intro = document.getElementById("main-page");
const quizPage = document.getElementById("quiz-page");
const startBTN = document.getElementById("start-btn");

if (startBTN) {
  startBTN.addEventListener("click", () => {
    intro.hidden = true;
    quizPage.hidden = false;
    startQuiz(); //function startQuiz()
  });
}

// for quiz page
const questionTitle = document.getElementById("current-question");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextBTN = document.getElementById("next-btn");

//applying questions & result system
let currentQuestion = 0;
const fullMark = quizInfo.length;
let score = 0;

function startQuiz() {
  score = 0;
  currentQuestion = 0;
  showQuestion();
  nextBTN.style.display = "none";
}

function showQuestion() {
  choicesElement.replaceChildren();
  const q = quizInfo[currentQuestion];
  questionTitle.textContent = `Question ${currentQuestion + 1} of ${fullMark}`;
  questionElement.textContent = q.question;

  q.choices.forEach((choice) => {
    const choiceBTN = document.createElement("button");
    choiceBTN.textContent = choice;
    choiceBTN.style.fontWeight = "bold";
    choiceBTN.style.fontSize = "20px";
    choiceBTN.addEventListener(
      "click",
      () => selectAnswer(choiceBTN, q.correct), //function selectAnswer( , )
    );
    choicesElement.appendChild(choiceBTN);
  });
}

function selectAnswer(button, correctAnswer) {
  const selected = button.textContent;
  Array.from(choicesElement.children).forEach((choiceBTN) => {
    choiceBTN.disabled = true;

    //correct choice
    if (choiceBTN.textContent === correctAnswer) {
      choiceBTN.style.backgroundColor = "rgba(0, 150, 0, 0.7)";
      choiceBTN.style.color = "black";
    }
    //wrong choice
    if (choiceBTN.textContent === selected && selected !== correctAnswer) {
      choiceBTN.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
      choiceBTN.style.color = "black";
    }
  });
  if (selected === correctAnswer) score++;

  if (currentQuestion === quizInfo.length - 1) {
    nextBTN.textContent = "Show Result";
  } else {
    nextBTN.textContent = "Next Question";
  }
  nextBTN.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizInfo.length) {
    showQuestion();
    nextBTN.style.display = "none";
  } else endQuiz(); //function endQuiz()
}
nextBTN.addEventListener("click", nextQuestion);

//for result page
const resultPage = document.getElementById("result-page");
const resultDisplay = document.getElementById("result");
const restartBTN = document.getElementById("restart-btn");
const scoreBoard = document.getElementById("scoreboard");

function endQuiz() {
  let highestScore = localStorage.getItem("highestScore") || 0;

  if (score > highestScore) {
    highestScore = score;
    localStorage.setItem("highestScore", highestScore);
  }

  const highestScorePercentage = Math.round((highestScore / fullMark) * 100);
  const scorePercentage = Math.round((score / fullMark) * 100);

  quizPage.hidden = true;
  resultPage.hidden = false;
  scoreBoard.hidden = false;
  resultDisplay.textContent = `You scored ${score} out of ${fullMark} (${scorePercentage}%).`;
  scoreBoard.textContent = `Your Current Score: ${score} (${scorePercentage}%).\nYour Highest Score: ${highestScore} (${highestScorePercentage}%).`;
}

if (restartBTN) {
  restartBTN.addEventListener("click", () => {
    resultPage.hidden = true;
    scoreBoard.hidden = true;
    intro.hidden = false;
  });
}
