// questions, choices & answers

const quizInfo = [
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
];

//applying CSS ids to JS
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const answersElement = document.getElementById("answers");

let currentQuestion = 0;

function showQuestion() {
  const q = quizInfo[currentQuestion];
  questionElement.textContent = q.question;

  q.choices.forEach((choice) => {
    const choiceBTN = document.createElement("button");
    choiceBTN.textContent = choice;
    choiceBTN.addEventListener("click", () =>
      selectAnswer(choiceBTN, q.correct),  //function selectAnswer( , )
    );
    choicesElement.appendChild(choiceBTN);
  });
}
showQuestion();

function selectAnswer(button, correctAnswer){
  const selected = button.textContent;
  Array.from(choicesElement.children).forEach((choiceBTN) => {
    choiceBTN.disabled = true;
    if(choiceBTN.textContent === correctAnswer){
      choiceBTN.style.borderColor = "green";
    }
    if(choiceBTN.textContent === selected && selected !== correctAnswer){
      choiceBTN.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
    }
  });
}