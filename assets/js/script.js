// array and object containing questions and, answers, and correct answer
var questionObject = [
    {
        questionPrompt: "Commonly used data types DO not include:",
        choices: ["string", "booleans", "alerts", "numbers"],
        correctChoice: "alerts"
    },

    {
        questionPrompt: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctChoice: "parentheses"
    },

    {
        questionPrompt: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctChoice: "all of the above"
    },

    {
        questionPrompt: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctChoice: "quotes"
    },

    {
        questionPrompt: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        correctChoice: "console log"
    },
];

// starting time
var timeRemaining = 100;

// penalty time
var penaltyTime = 15;

// keep track of the question we are in
var questionIndex = 0

var questionContainer = document.querySelector(".questions-container");
var startQuiz = document.querySelector("#startQuiz");

//  create a new unordered list element
var buttonChoice = document.createElement("ul")




// countdown timer function
var startCountDown = function countdown () {
    var countdownInterval = setInterval(function() {
        if (timeRemaining > 0) {
            counterDownTimerEl.textContent = "Time Remaining: " + timeRemaining;
            timeRemaining --;
        }
        else {
            counterDownTimerEl.textContent = "Time's Up!";
            clearInterval(countdownInterval);
        }

    },
    // set the amount of time passed to 1 second
     1000)
};

// add questions to the page
var loadQuestions = function() {
    // need to clear everything on the screen to show questions
    questionContainer.innerHTML = "";
    // need to clear button choices
    buttonChoice.innerHTML = "";

    // loop through array to show question and responses
    for (var i = 0; i < questionObject.length; i++) {
        // defining the question
        var targetQuestion = questionObject[questionIndex].questionPrompt;

        // defining the choices
        var questionOption = questionObject[questionIndex].choices;

        // appending the question to the page
        questionContainer.textContent = targetQuestion;
    }

    // go through each question choice
    questionOption.forEach(function(newOption) {
        var newItem = document.createElement("li");
        newItem.textContent = newOption;
        questionContainer.appendChild(buttonChoice);
        buttonChoice.appendChild(newItem);
        newItem.addEventListener("click", (compareChoice));
    })
};


var compareChoice = function(event) {

};





















// //pull data from object array (question and choices)
// // bring in question
// // for each or for loop  to iterate through and create button



// // third function is getting the logic of right or wrong


// // var arrayEx = [
// //     {
// //     question: 'kdfljhsglksdjf',
// //     choices: ['option 1', 'option2', ]
// //     }
// // ]

// // var currentQuestion = arrayEx[questionIndex]
// // currentQuestion.choices.forEach(function(choice, i){
// //      create button declare with a variable
// //      set attribute to pull in value .setAttribute('value', choice)
// //      append, text-content
// //      button variable.textContent = i + 1 + '. ' + choice;
// //      apply 'onclick' to the button variable
// //      push the button variable
// // })

// // next function will be correct or wrong

// // add event listening for start quiz button

// // starting time
// var timeRemaining = 100;

// // keep track of the question we are in
// var questionIndex = 0

// var startQuizEl = document.querySelector("#start-quiz");
// var counterDownTimerEl = document.querySelector("#countdown-timer")


// var startQuiz = function() {
//     hideIntro();
//     startCountDown();
//     questions();
// };


// // unhide question div
// // hide  intro
// var hideIntro = function() {
//     // add class
//     var hideDisplay = document.querySelector(".quiz-instructions-container");
//     hideDisplay.classList.add("hide-display");
// };

// var handleAnswerChoice = function(event) {
//     console.log(event);
//     // defining what is being targeted when the user clicks a button
//     var userChoice = event.target.textContent;
//     var correctAnswer = questionObject[questionIndex].correctChoice

//     if (correctAnswer === userChoice) {
//         var displayCorrect = document.querySelector(".question-answers");
//         displayCorrect.textContent = "Correct";
//     }
//     else {
//         var displayWrong = document.querySelector(".question-answers");
//         displayWrong.textContent = "Wrong";

//         timeRemaining -= 10;
//     }

//     questionIndex ++;
//     // reset to 0 when game finishes

//     // call questions function to get next question
//     questions();

// };

// var questions = function()  {
//     var targetQuestion = document.querySelector(".questions-text");

//     var questionText = document.createElement("h3");
//     questionText.textContent = questionObject[questionIndex].questionPrompt;
//     targetQuestion.appendChild(questionText);


//     // for loop to go through all of the answer choices
//     for (var i = 0; i < questionObject[questionIndex].choices.length; i++) {
//         var answerButton = document.createElement("button");
//             answerButton.textContent = questionObject[questionIndex].choices[i];

//             // add event listener so the button can be clicked
//             answerButton.onclick = handleAnswerChoice;

//         // adding the buttons to the blank div
//         var questionAnswers = document.querySelector(".question-answers");
//             questionAnswers.appendChild(answerButton);

//     }
// };



// startQuizEl.addEventListener("click", startQuiz);