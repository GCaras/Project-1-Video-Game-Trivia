Welcome to the Videogame Trivia game! This quiz asks 10 questions regarding general videogame history and provides a factoid about the correct answer after each question is answered.

URL: https://gcaras.github.io/Project-1-Video-Game-Trivia/

![image](https://user-images.githubusercontent.com/52478158/64027412-a6cdda00-cb0e-11e9-9ba0-95fcdf6b107f.png)

On the splash page, click the "Go!" button to begin the quiz.

![image](https://user-images.githubusercontent.com/52478158/64027468-c533d580-cb0e-11e9-9757-96491e5c59d7.png)

Once the question loads, select the appropriate answer. The page will then load the HTML indicating whether or not the question was correct and provide a factoid regarding the correct answer.

![image](https://user-images.githubusercontent.com/52478158/64027682-36738880-cb0f-11e9-8ce7-fd8a22e4c329.png)

Select the "Next!" button to move onto the next question. Once the user has answered all 10 questions, a results page will show how many questions were answered correctly and a range of responses based on the amount of questions answered correctly.

![image](https://user-images.githubusercontent.com/52478158/64027640-2360b880-cb0f-11e9-8622-efc80eafa3c5.png)

Refresh the page to retake the test.

The quiz uses 2 classes, Question and Answer, and uses the "Answer" class to populate an array of answers within the the "Question" class. The answer parameters contain a text string and a boolean value indicating whether the answer is correct or not. The answers are entered into the new question object as an array alongside the other "Question" variables questionText, tidBit, and image:

![image](https://user-images.githubusercontent.com/52478158/64028125-142e3a80-cb10-11e9-8a6b-1f3a1b6c7927.png)

Variables are created for the array of questions that will be targeted as well as identifying specific HTML classes that will be manipulated via the DOM. Base values are assigned to the questionNumber and correctAnswer counters and the style for the answer buttons is set to "none" so that they will not appear on the splash page:

![image](https://user-images.githubusercontent.com/52478158/64028485-bcdc9a00-cb10-11e9-80a7-93a8e9c78b80.png)

The first function "fillButtonText()" targets the HTML's image source, question innerHTML, and button innerHTML and populates them with the information contained within the corresponding question number within the questions array:

![image](https://user-images.githubusercontent.com/52478158/64028777-4c824880-cb11-11e9-83bb-c876d70d16f1.png)

The "winCheck()" function is invoked when a user click's the "Next!" button and the question number is equal to the questions array. The function will check the total in the correctAnswers counter and display a message and image based on the amount of correctly answered questions. It will also clear out the innerHTML and display style of the buttons:

![image](https://user-images.githubusercontent.com/52478158/64029193-1a251b00-cb12-11e9-85ae-c120c0332957.png)

The tidBitFillTextCorrect/Wrong() functions replace the question and answers with a correct or incorrect indicator based on the selected button as well as a factoid provided in the question (to be refactored...):

![image](https://user-images.githubusercontent.com/52478158/64029484-a7686f80-cb12-11e9-99a4-3a36a0313c0f.png)

The answerCheck() function loops through each of the text values for each answer of the current questionNumber and once it is matched with the selected button checks the boolean value to see if it is marked as true or false. Depending on whether the answer is correct or incorrect it will callback to the associated tidBitFill function:

![image](https://user-images.githubusercontent.com/52478158/64029565-e0084900-cb12-11e9-8211-8a8a27965c62.png)

Event listeners are added to the 5 buttons included in the HTML. The submit button that loads with the splash screen contains an if statement that will run the winCheck() and if there are still questions remaining, will run the fillButtonText() along with updating the display styles for the filled elements. Each answer button is assigned the answerCheck() on a click event based on the question number:

![image](https://user-images.githubusercontent.com/52478158/64029847-62910880-cb13-11e9-93f0-92b02fc039fa.png)







