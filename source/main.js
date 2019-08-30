//code for question class to populate a "questions" array.

class Question {
  constructor(questionText, answers, tidBit, image) {
    this.questionText = questionText;
    this.answers = answers;
    this.tidBit = tidBit;
    this.image = image;
  }
}

//code to create the "answers" array within the new question objects.

class Answer {
  constructor(answerText, isCorrect) {
    this.answerText = answerText;
    this.isCorrect = isCorrect;
  }
}

//new questions to populate the questions array based on the "Question" class created above.

var q1 = new Question("What is the highest selling videogame of all-time?", [new Answer("Tetris", false), new Answer("GTA V", false), new Answer("Minecraft", true), new Answer("Fortnite", false)], "Minecraft surpassed Tetris as the highest selling videogame ever in early 2019, selling over 170 MILLION copies!", "./images/video-game-arcade-svgrepo-com.svg");

var q2 = new Question("What is the name of the main protagonist in the Legend of Zelda franchise?", [new Answer("Mario", false), new Answer("Link", true), new Answer("Zelda", false), new Answer("Pit", false)], "In Legend of Zelda, creator Shigeru Miyamoto originally planned to have the Triforce made out of microchips. Link got his name from the fact that he was supposed to be the link between the past and future.", "./images/legend-of-zelda-link-sword.png");

var q3 = new Question("What does Solid Snake use to hide himself with?", [new Answer("Cloaking Device", false), new Answer("Metal Crate", false), new Answer("Cardboard cut-out", false), new Answer("Cardboard Box", true)], "Snake covering himself with a cardboard box is a homage to the title character of the novel Hako Otoko (The Box Man), of which series director Hideo Kojima is a fan.", "./images/solid-snake.png");

var q4 = new Question("In what year was the original Sonic the Hedgehog game released?", [new Answer("1989", false), new Answer("1993", false), new Answer("1991", true), new Answer("1995", false)], "Before his release in 1991, early drafts of SEGA's blue blur envisioned him as a rabbit that could grasp things and fight with prehensile ears.", "./images/sonic.png");

var q5 = new Question("In the Halo series, which era of SPARTAN is Master Chief?", [new Answer("SPARTAN-I", false), new Answer("SPARTAN-II", true), new Answer("SPARTAN-III", false), new Answer("SPARTAN-IV", false)], "SPARTAN-II John-117's (a.k.a Master Chief) armor is named MJOLNIR, a nod to the famous hammer of Thor. ", "./images/master-chief.png");

var q6 = new Question("Which game featured the very first easter egg ever?", [new Answer("Adventure", true), new Answer("Super Mario Bros.", false), new Answer("Aladdin", false), new Answer("Joust", false)], "The original 'Easter Egg' was created in 'Adventure' by programmer Warren Robinett in order to sneak due credit into a game without his Atari bosses's knowledge nor consent. By following an arcane series of steps, players could unlock a secret room that featured the giant flashing words: 'Created by Warren Robinett'.", "./images/yoshi-egg.png");

var q7 = new Question("When was Steam first released?", [new Answer("2004", false), new Answer("2011", false), new Answer("2003", true), new Answer("2007", false)], "the client's official release on September 12, 2003. The client and website choked under the strain of thousands of users simultaneously attempting to play the game. At the time, Steam's primary function was streamlining the patch process common in online computer games, and was an optional component for all other games.", "./images/team-fortress.png");

var q8 = new Question("In the National Pokedex, what number is Pikachu", [new Answer("1", false), new Answer("151", false
), new Answer("56", false), new Answer("25", true)], "Pikachu (pokedex entry #25) keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.", "./images/pikachu.png");

var q9 = new Question("What programming language was used to create the game &quot;Minecraft&quot;?", [new Answer("Java", true), new Answer("HTML 5", false), new Answer("C++", false), new Answer("Python", false)], "The first version of Minecraft was created in Java after just 6 days! In 2009, Swedish programmer and designer Markus Persson (a.k.a 'Notch') began work on what is now Minecraft on May 10, 2009 and finished on May 16. The “alpha version” of Minecraft made its public debut the very next day.", "./images/minecraft-seeklogo.com.png");

var q10 = new Question("Which game has been credited with popularizing the first-person shooter genre?", [new Answer("Wolfenstein 3D", true), new Answer("Doom", false), new Answer("Duke Nukem", false), new Answer("Counter-Strike", false)], "Wolfenstein 3D was originally a stealth game. You could sneak up on guards, hide bodies, disguise yourself in Nazi uniforms and so on. All of this was eventually cut when it dawned on the developers that simply running around and shooting stuff was more fun.", "./images/target.png");

//new questions array

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//creating objects based on the elements in the HTML that will need to be manipulated to edit text properties.

var question = document.querySelector(".question-hint-comment");
var image = document.querySelector(".image");

//creating objects based on the elements in the HTML that will need to be clicked on and initiate an event listener.

var submitButton = document.querySelector(".start-submit-button");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");

//setting default values to HTML text (for splash page) and counters for functions.

answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";
answer4.style.display = "none";
var questionNumber = 0;
var correctAnswers = 0;

//function to fill the innerHTML of the question and answer buttons based on the current question number's index.

function fillButtonText() {
  question.innerHTML = questions[questionNumber].questionText;
  answer1.innerHTML = questions[questionNumber].answers[0].answerText;
  answer2.innerHTML = questions[questionNumber].answers[1].answerText;
  answer3.innerHTML = questions[questionNumber].answers[2].answerText;
  answer4.innerHTML = questions[questionNumber].answers[3].answerText;
  document.querySelector(".image").src = questions[questionNumber].image;
}

function winCheck() {
  if (correctAnswers > 7) {
  question.innerHTML = `Wow! You got ${correctAnswers}/10 questions correct!\n` + `Truly a hero worthy of weilding the Master Sword!`;
  document.querySelector(".image").src = "./images/master-sword.png";
  } else if (correctAnswers > 4) {
    question.innerHTML = `Nice! You got ${correctAnswers}/10 questions correct!\n` + `You might want to try this test again before taking on the forces of Evil.`;
    document.querySelector(".image").src = "./images/shrug.jpg";
  } else if (correctAnswers > 1) {
    question.innerHTML = `Oh... You got ${correctAnswers}/10 questions correct.\n` + `I think there's an opening for a stableboy over at Lon Lon Ranch. Maybe try again?`;
    document.querySelector(".image").src = "./images/cow.jpg";
  } else {
    question.innerHTML = `Damn... You got ${correctAnswers}/10 questions correct...\n` + `ALL YOUR BASE ARE BELONG TO US`;
    document.querySelector(".image").src = "./images/all-your-base.png";
  }
  answer1.innerHTML = "";
  answer2.innerHTML = "";
  answer3.innerHTML = "";
  answer4.innerHTML = "";
  answer1.style.display = "none";
  answer2.style.display = "none";
  answer3.style.display = "none";
  answer4.style.display = "none";
  document.querySelector(".start-submit-button").style.display = "none";
}

function tidBitFillTextCorrect() {
  question.innerHTML = `Correct! \n` + `${questions[questionNumber].tidBit}`;
  correctAnswers = correctAnswers + 1;
  answer1.style.display = "none";
  answer2.style.display = "none";
  answer3.style.display = "none";
  answer4.style.display = "none";
  document.querySelector(".start-submit-button").style.display = "";
  document.querySelector(".start-submit-button").innerHTML = "Next!";
}

function tidBitFillTextWrong() {
  question.innerHTML = `Oof, I'm sorry but that's incorrect.\n` + `${questions[questionNumber].tidBit}`;
  answer1.style.display = "none";
  answer2.style.display = "none";
  answer3.style.display = "none";
  answer4.style.display = "none";
  document.querySelector(".start-submit-button").style.display = "";
  document.querySelector(".start-submit-button").innerHTML = "Next!";
}

function answerCheck(text, answers) {
  for (i = 0; i <= 4; i++) {
    if (text === answers[i].answerText) { 
        if (answers[i].isCorrect === true) {
        tidBitFillTextCorrect(questionNumber);
        return questionNumber = questionNumber + 1;
      } else {
        tidBitFillTextWrong(questionNumber);
        return  questionNumber = questionNumber + 1;
        }
      }
    }
  }

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (questionNumber === questions.length) {
    winCheck(questionNumber);
  } else {
    fillButtonText(questionNumber);  document.querySelector(".image").src = questions[questionNumber].image;
    document.querySelector(".start-submit-button").style.display = "none";
  }
  document.querySelector(".image").src = questions[questionNumber].image;
  document.querySelector(".start-submit-button").style.display = "none";
  answer1.style.display = "";
  answer2.style.display = "";
  answer3.style.display = "";
  answer4.style.display = "";
  })

answer1.addEventListener("click", function (evt) {
  evt.preventDefault();
  answerCheck(answer1.innerHTML, questions[questionNumber].answers);
})

answer2.addEventListener("click", function (evt) {
  evt.preventDefault();
  answerCheck(answer2.innerHTML, questions[questionNumber].answers);
})

answer3.addEventListener("click", function (evt) {
  evt.preventDefault();
  answerCheck(answer3.innerHTML, questions[questionNumber].answers);
})

answer4.addEventListener("click", function (evt) {
  evt.preventDefault();
  answerCheck(answer4.innerHTML, questions[questionNumber].answers);
})