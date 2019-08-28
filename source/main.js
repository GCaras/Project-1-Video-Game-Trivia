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
        "Fortnite"
      ],
      "tidbit": "Things and stuff",
      "image": "./images/video-game-arcade-svgrepo-com.svg"
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
    "image": "./images/game-console-joystick-svgrepo-com.svg"
    },
    {
      "question": "In what year was the original Sonic the Hedgehog game released?",
      "correct_answer": "1991",
      "incorrect_answers": [
        "1989",
        "1993",
        "1995"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    },
    {
      "question": "In the Halo series, which era of SPARTAN is Master Chief? ",
      "correct_answer": "SPARTAN-II",
      "incorrect_answers": [
        "SPARTAN-I",
        "SPARTAN-III",
        "SPARTAN-IV"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    },
    {
      "question": "Which game featured the very first easter egg ever?",
      "correct_answer": "Adventure",
      "incorrect_answers": [
        "Super Mario Bros.",
        "Aladdin",
        "Joust"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    },
    {
      "question": "When was Steam first released?",
      "correct_answer": "2003",
      "incorrect_answers": [
        "2004",
        "2011",
        "2007"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    },    
    {
      "question": "In the National Pokedex what number is Pikachu",
      "correct_answer": "25",
      "incorrect_answers": [
        "1",
        "151",
        "56"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    },
    {
      "question": "What programming language was used to create the game &quot;Minecraft&quot;?",
      "correct_answer": "Java",
      "incorrect_answers": [
        "HTML 5",
        "C++",
        "Python"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    },
    {
      "question": "Which game has been credited with inventing the first-person shooter genre?",
      "correct_answer": "Wolfenstein 3D",
      "incorrect_answers": [
        "Doom",
        "Duke Nukem",
        "Counter-Strike"
      ],
      "tidbit": "words",
      "image": "./images/game-console-joystick-svgrepo-com.svg"
    }];

var question = document.querySelector(".question-hint-comment");

var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");

answer1.style.display= "none";
answer2.style.display= "none";
answer3.style.display= "none";
answer4.style.display= "none";

var questionNumber = 0;

var correctAnswers = 0;

var submitButton = document.querySelector(".start-submit-button");

var image = document.querySelector(".image");

submitButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  let i = questionNumber;
  question.innerHTML = questions[i].question;
  answer1.innerHTML = questions[i].incorrect_answers[0];
  answer2.innerHTML = questions[i].incorrect_answers[1]; 
  answer3.innerHTML = questions[i].correct_answer;
  answer4.innerHTML = questions[i].incorrect_answers[2];
  document.querySelector(".image").src = questions[i].image;
  document.querySelector(".start-submit-button").style.display = "none";
  answer1.style.display= "";
  answer2.style.display= "";
  answer3.style.display= "";
  answer4.style.display= "";
})

answer1.addEventListener("click", function(evt) {
  evt.preventDefault();  
  let i = questionNumber;  
  if (answer1.innerHTML === questions[i].correct_answer) {
    alert(`Correct! ${questions[i].tidbit}`);
    questionNumber = questionNumber + 1;
    correctAnswers = correctAnswers +1;
    if (questionNumber === 10) {
      question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
      answer1.innerHTML = "";
      answer2.innerHTML = "";
      answer3.innerHTML = "";
      answer4.innerHTML = "";
      answer1.style.display= "none";
      answer2.style.display= "none";
      answer3.style.display= "none";
      answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
      }
    } else if (answer1.innerHTML !== questions[i].correct_answer) {
      alert(`Oof, I'm sorry but that's incorrect`);
      questionNumber = questionNumber + 1;
      if (questionNumber === 10) {
        question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
        answer1.innerHTML = "";
        answer2.innerHTML = "";
        answer3.innerHTML = "";
        answer4.innerHTML = "";
        answer1.style.display= "none";
        answer2.style.display= "none";
        answer3.style.display= "none";
        answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
        }
      }
})

answer2.addEventListener("click", function(evt) {
  evt.preventDefault();  
  let i = questionNumber;  
  if (answer2.innerHTML === questions[i].correct_answer) {
    alert(`Correct! ${questions[i].tidbit}`);
    questionNumber = questionNumber + 1;
    correctAnswers = correctAnswers +1;
    if (questionNumber === 10) {
      question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
      answer1.innerHTML = "";
      answer2.innerHTML = "";
      answer3.innerHTML = "";
      answer4.innerHTML = "";
      answer1.style.display= "none";
      answer2.style.display= "none";
      answer3.style.display= "none";
      answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
      }
    } else {
      alert(`Oof, I'm sorry but that's incorrect`);
      questionNumber = questionNumber + 1;
      if (questionNumber === 10) {
        question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
        answer1.innerHTML = "";
        answer2.innerHTML = "";
        answer3.innerHTML = "";
        answer4.innerHTML = "";
        answer1.style.display= "none";
        answer2.style.display= "none";
        answer3.style.display= "none";
        answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
        }
      }
})

answer3.addEventListener("click", function(evt) {
  evt.preventDefault();  
  let i = questionNumber;  
  if (answer3.innerHTML === questions[i].correct_answer) {
    alert(`Correct! ${questions[i].tidbit}`);
    questionNumber = questionNumber + 1;
    correctAnswers = correctAnswers +1;
    if (questionNumber === 10) {
      question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
      answer1.innerHTML = "";
      answer2.innerHTML = "";
      answer3.innerHTML = "";
      answer4.innerHTML = "";
      answer1.style.display= "none";
      answer2.style.display= "none";
      answer3.style.display= "none";
      answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
      }
    } else {
      alert(`Oof, I'm sorry but that's incorrect`);
      questionNumber = questionNumber + 1;
      if (questionNumber === 10) {
        question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
        answer1.innerHTML = "";
        answer2.innerHTML = "";
        answer3.innerHTML = "";
        answer4.innerHTML = "";
        answer1.style.display= "none";
        answer2.style.display= "none";
        answer3.style.display= "none";
        answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
        }
      }
})

answer4.addEventListener("click", function(evt) {
  evt.preventDefault();  
  let i = questionNumber;  
  if (answer4.innerHTML === questions[i].correct_answer) {
    alert(`Correct! ${questions[i].tidbit}`);
    questionNumber = questionNumber + 1;
    correctAnswers = correctAnswers +1;
    if (questionNumber === 10) {
      question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
      answer1.innerHTML = "";
      answer2.innerHTML = "";
      answer3.innerHTML = "";
      answer4.innerHTML = "";
      answer1.style.display= "none";
      answer2.style.display= "none";
      answer3.style.display= "none";
      answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
      }
    } else {
      alert(`Oof, I'm sorry but that's incorrect`);
      questionNumber = questionNumber + 1;
      if (questionNumber === 10) {
        question.innerHTML = `Congrats! You got ${correctAnswers} questions correct!`
        answer1.innerHTML = "";
        answer2.innerHTML = "";
        answer3.innerHTML = "";
        answer4.innerHTML = "";
        answer1.style.display= "none";
        answer2.style.display= "none";
        answer3.style.display= "none";
        answer4.style.display= "none";
      } else {
        let q = questionNumber;
        question.innerHTML = questions[q].question;
        answer1.innerHTML = questions[q].incorrect_answers[1];
        answer2.innerHTML = questions[q].incorrect_answers[0];
        answer3.innerHTML = questions[q].correct_answer;
        answer4.innerHTML = questions[q].incorrect_answers[2];
        document.querySelector(".image").src = questions[q].image;
        }
      }
})



