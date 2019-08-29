//code for question class to populate a "questions" array. Using API results to test functionality.

class Question {
    constructor(questionText, answers, tidBit, image) {
        this.questionText = questionText;
        this.answers = answers;
        this.tidBit = tidBit;
        this.image = image;
    }
}

class Answer {
  constructor(answerText, isCorrect) {
    this.answerText = answerText;
    this.isCorrect = isCorrect;
  }
}

var q1 = new Question("What is the highest selling videogame of all-time?", [new Answer("Minecraft", true), new Answer("Tetris", false), new Answer("GTA V", false), new Answer("Fortnite", false)], "Things and stuff", "./images/video-game-arcade-svgrepo-com.svg");

var q2 = new Question("What is the name of the main protagonist in the Legend of Zelda franchise?", [new Answer("Mario", false), new Answer("Link", true), new Answer( "Zelda", false), new Answer("Pit", false)], "The first Zelda game is one of the last, chronologically speaking. The first two games take place in an alternate universe where Link failed to defeat Ganon in The Ocarina of Time, which was released later. Skyward Sword, meanwhile, is the first Zelda game, chronologically.", "./images/legend-of-zelda-link-sword.png");

var q3 = new Question("What does Solid Snake use to hide himself with?", "Cardboard Box", ["Cloaking Device", "Metal Crate", "Cardboard cut-out"], "words", "./images/solid-snake.png");

var q4 = new Question("In what year was the original Sonic the Hedgehog game released?", "1991", ["1989", "1993", "1995"], "words", "./images/sonic.png");

var q5 = new Question("In the Halo series, which era of SPARTAN is Master Chief? ","SPARTAN-II",["SPARTAN-I","SPARTAN-III","SPARTAN-IV"], "words", "./images/master-chief.jpg");

var questions = [q1, q2];



//     var q6 = new Question()
//     {
//       "question": "Which game featured the very first easter egg ever?",
//       "correct_answer": "Adventure",
//       "incorrect_answers": [
//         "Super Mario Bros.",
//         "Aladdin",
//         "Joust"
//       ],
//       "tidbit": "words",
//       "image": "./images/yoshi-egg.png"
//     },

// var q7= new Question()
//     {
//       "question": "When was Steam first released?",
//       "correct_answer": "2003",
//       "incorrect_answers": [
//         "2004",
//         "2011",
//         "2007"
//       ],
//       "tidbit": "words",
//       "image": "./images/game-console-joystick-svgrepo-com.svg"
//     },

    
// var q8 = new Question()
//     {
//       "question": "In the National Pokedex what number is Pikachu",
//       "correct_answer": "25",
//       "incorrect_answers": [
//         "1",
//         "151",
//         "56"
//       ],
//       "tidbit": "words",
//       "image": "./images/pikachu.png"
//     },


// var q9 = new Question()
//     {
//       "question": "What programming language was used to create the game &quot;Minecraft&quot;?",
//       "correct_answer": "Java",
//       "incorrect_answers": [
//         "HTML 5",
//         "C++",
//         "Python"
//       ],
//       "tidbit": "words",
//       "image": "./images/game-console-joystick-svgrepo-com.svg"
//     },


// var q10 = new Question()
//     {
//       "question": "Which game has been credited with inventing the first-person shooter genre?",
//       "correct_answer": "Wolfenstein 3D",
//       "incorrect_answers": [
//         "Doom",
//         "Duke Nukem",
//         "Counter-Strike"
//       ],
//       "tidbit": "words",
//       "image": "./images/game-console-joystick-svgrepo-com.svg"
//     }];

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

function winCheck() {
    question.innerHTML = `Congrats! You got ${correctAnswers}/10 questions correct!`
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    answer1.style.display= "none";
    answer2.style.display= "none";
    answer3.style.display= "none";
    answer4.style.display= "none";
  }

function answerCheck(text, answers) {
  for (i = 0; i <= answers.length; i++) {
    if (text === answers[i].answerText) {
      if (answers[i].isCorrect === true) {
        alert(`Correct! ${questions[questionNumber].tidBit}`);
        correctAnswers = correctAnswers + 1;
          if (questionNumber + 1 === questions.length) {
        winCheck(questionNumber);
          } else {
            questionNumber = questionNumber + 1;
            question.innerHTML = questions[questionNumber].questionText;
            answer1.innerHTML = questions[questionNumber].answers[0].answerText;
            answer2.innerHTML = questions[questionNumber].answers[1].answerText; 
            answer3.innerHTML = questions[questionNumber].answers[2].answerText;
            answer4.innerHTML = questions[questionNumber].answers[3].answerText;
            document.querySelector(".image").src = questions[questionNumber].image;
          }
      } else {
        alert(`Oof, I'm sorry but that's incorrect`);
        if (questionNumber + 1 === questions.length) {
          winCheck(questionNumber);
            } else {
              questionNumber = questionNumber + 1;
              answer1.innerHTML = questions[questionNumber].answers[0].answerText;
              answer2.innerHTML = questions[questionNumber].answers[1].answerText; 
              answer3.innerHTML = questions[questionNumber].answers[2].answerText;
              answer4.innerHTML = questions[questionNumber].answers[3].answerText;
              document.querySelector(".image").src = questions[questionNumber].image;
        }
      }
    }
  }
}

submitButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  question.innerHTML = questions[questionNumber].questionText;
  answer1.innerHTML = questions[questionNumber].answers[0].answerText;
  answer2.innerHTML = questions[questionNumber].answers[1].answerText; 
  answer3.innerHTML = questions[questionNumber].answers[2].answerText;
  answer4.innerHTML = questions[questionNumber].answers[3].answerText;
  document.querySelector(".image").src = questions[questionNumber].image;
  document.querySelector(".start-submit-button").style.display = "none";
  answer1.style.display= "";
  answer2.style.display= "";
  answer3.style.display= "";
  answer4.style.display= "";
});

answer1.addEventListener("click", function(evt) {
  evt.preventDefault();  
  answerCheck(answer1.innerHTML, questions[questionNumber].answers);
})

answer2.addEventListener("click", function(evt) {
  evt.preventDefault();  
  answerCheck(answer2.innerHTML, questions[questionNumber].answers);
})

answer3.addEventListener("click", function(evt) {
  evt.preventDefault();  
  answerCheck(answer3.innerHTML, questions[questionNumber].answers);
})

answer4.addEventListener("click", function(evt) {
  evt.preventDefault();  
  answerCheck(answer4.innerHTML, questions[questionNumber].answers);
})