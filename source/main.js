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
      "question": "What is the name of the main protagonist in the Legend of Zelda franchise?",
      "correct_answer": "Link",
      "incorrect_answers": [
        "Mario",
        "Zelda",
        "Pit"
      ]
    },
    {
      "question": "What year was the game Team Fortress 2 released?",
      "correct_answer": "2007",
      "incorrect_answers": [
        "2009",
        "2005",
        "2010"
      ]
    },
    {
      "question": "Which popular First Person Shooter (FPS) franchise, got a Real Time Strategy (RTS) game developed based on its universe?",
      "correct_answer": "Halo",
      "incorrect_answers": [
        "Battlefield",
        "Call of Duty",
        "Borderlands"
      ]
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

console.log(questions[0]);

var question = document.querySelector(".question-hint-comment");

var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");

var questionNumber = 0;

const submitButton = document.querySelector(".start-submit-button");

submitButton.addEventListener("click", function(i) {
    i = questionNumber;
    question.innerHTML = questions[i].question;
    answer1.innerHTML = questions[i].correct_answer;
    answer2.innerHTML = questions[i].incorrect_answers[0];
    answer3.innerHTML = questions[i].incorrect_answers[1];
    answer4.innerHTML = questions[i].incorrect_answers[2];
    questionNumber = questionNumber + 1;
})



