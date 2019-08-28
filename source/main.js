//code for question class to populate a "questions" array. Using API results to test functionality.

// class Question {
//     constructor(question="", answer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, hint="", tidBit="", imageUrl) {
//         this.question = question;
//         this.answer = answer;
//         this.incorrectAnswer1 = incorrectAnswer1;
//         this.incorrectAnswer2 = incorrectAnswer2;
//         this.incorrectAnswer3 = incorrectAnswer3;
//         this.hint = hint;
//         this.tidBit = tidBit;
//         this.imageUrl = imageUrl;
//     }
// }

// const questions = [];

const questions =[
    {
      "question": "What is the highest selling videogame of all-time?",
      "correct_answer": "Minecraft",
      "incorrect_answers": [
        "Tetris",
        "GTA V",
        "Super Mario"
      ],
      "tidbit": "Things and stuff",
      "image": "./images/zelda-rupee.png"
    },
    {
      "question": "What is the name of the main protagonist in the Legend of Zelda franchise?",
      "correct_answer": "Link",
      "incorrect_answers": [
        "Mario",
        "Zelda",
        "Pit"
      ],
      "tidbit": "The first Zelda game is one of the last, chronologically speaking. The first two games take place in an alternate universe where Link failed to defeat Ganon in The Ocarina of Time, which was released later. Skyward Sword, meanwhile, is the first Zelda game, chronologically.",
      "image": "./images/legend-of-zelda-link-sword.png"
    },
    {
    "question": "What does Solid Snake use to hide himself with?",
    "correct_answer": "Cardboard Box",
    "incorrect_answers": [
      "Cloaking Device",
      "Metal Crate",
      "Cardboard cut-out"
    ],
    "tidbit": "words",
    "image": ""
    },
    {
      "question": "Which Greek letter represents the Half-Life logo?",
      "correct_answer": "Lambda",
      "incorrect_answers": [
        "Omega",
        "Alpha",
        "Sigma"
      ]
    }];

var question = document.querySelector(".question-hint-comment");

var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");

var questionNumber = 0;

var correctAnswers = 0;

var submitButton = document.querySelector(".start-submit-button");

var image = document.querySelector(".image");

submitButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  let i = questionNumber;
  question.innerHTML = questions[i].question;
  answer1.innerHTML = questions[i].correct_answer;
  answer2.innerHTML = questions[i].incorrect_answers[0];
  answer3.innerHTML = questions[i].incorrect_answers[1];
  answer4.innerHTML = questions[i].incorrect_answers[2];
  document.querySelector(".image").src = questions[i].image;
  document.querySelector(".start-submit-button").style.display = "none";
  
})

answer1.addEventListener("click", function(evt) {
  evt.preventDefault();    
  // if (answer1.innerHTML === questions[i].correct_answer) {
  let i = questionNumber;
  alert(`Correct! ${questions[i].tidbit}`);
  questionNumber = questionNumber + 1;
  correctAnswers = correctAnswers +1;
  console.log(correctAnswers);
  let q = questionNumber;
  question.innerHTML = questions[q].question;
  answer1.innerHTML = questions[q].correct_answer;
  answer2.innerHTML = questions[q].incorrect_answers[0];
  answer3.innerHTML = questions[q].incorrect_answers[1];
  answer4.innerHTML = questions[q].incorrect_answers[2];
  document.querySelector(".image").src = questions[q].image;
  // }
})



