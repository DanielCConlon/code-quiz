var startQuizEl = document.querySelector("#start-quiz");
var counterDownTimerEl = document.querySelector("#countdown-timer")
// starting time
var timeRemaining = 100;

var questionIndex = 0

var questionObject = [
    // setting up all the questions with the corresponding answer choice
    {
        question1: "This is a question",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correctChoice: "option 1"
    },

    {
        question2: "This is question 2",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correctChoice: "option 1"
    },

    {
        question1: "This is question 3",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correctChoice: "option 1"
    },

    {
        question1: "This is question 4",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correctChoice: "option 1"
    },
];

// have parent div to display none
// hide the coding quiz welcome

var startQuiz = function() {
    hideIntro();
    startCountDown();
    questions();
};

// countdown timer function
var startCountDown = function countdown () {
    var countdownInterval = setInterval(function() {
        if (timeRemaining > 0) {
            counterDownTimerEl.textContent = "Time Remaining " + timeRemaining;
            timeRemaining --;
        }
        else {
            counterDownTimerEl.textContent = "Time Remaining" + "";
            clearInterval(countdownInterval);
        }

    },
    // set the amount of time passed to 1 second
     1000)
};


// unhide question div
// hide  intro
var hideIntro = function() {
    // add class
    var hideDisplay = document.querySelector(".quiz-instructions-container");
    hideDisplay.classList.add("hide-display");
};

var handleAnswerChoice = function(event) {
    console.log(event);
    // defining what is being targeted when the user clicks a button
    var userChoice = event.target.textContent;
    var correctAnswer = questionObject[questionIndex].correctChoice

    if (correctAnswer === userChoice) {
        var displayCorrect = document.querySelector(".question-answers");
        displayCorrect.textContent = "Correct";
    }
    else {
        var displayWrong = document.querySelector(".question-answers");
        displayWrong.textContent = "Wrong";

        timeRemaining -= 10;
    }

    questionIndex ++;
    // reset to 0 when game finishes
    
    // call questions function to get next question
    questions();

};

var questions = function()  {
    var targetQuestion = document.querySelector(".questions-text");

    var questionText = document.createElement("h3");
    questionText.textContent = questionObject[questionIndex].question1;
    targetQuestion.appendChild(questionText);


    // for loop to go through all of the answer choices
    for (var i = 0; i < questionObject[questionIndex].choices.length; i++) {
        var answerButton = document.createElement("button");
            answerButton.textContent = questionObject[questionIndex].choices[i];

            // add event listener so the button can be clicked
            answerButton.onclick = handleAnswerChoice;

        // adding the buttons to the blank div
        var questionAnswers = document.querySelector(".question-answers");
            questionAnswers.appendChild(answerButton);

    }
};




//pull data from object array (question and choices)
// bring in question
// for each or for loop  to iterate through and create button



// third function is getting the logic of right or wrong


// var arrayEx = [
//     {
//     question: 'kdfljhsglksdjf',
//     choices: ['option 1', 'option2', ]
//     }
// ]

// var currentQuestion = arrayEx[questionIndex]
// currentQuestion.choices.forEach(function(choice, i){
//      create button declare with a variable
//      set attribute to pull in value .setAttribute('value', choice)
//      append, text-content
//      button variable.textContent = i + 1 + '. ' + choice;
//      apply 'onclick' to the button variable
//      push the button variable
// })

// next function will be correct or wrong

// add event listening for start quiz button
startQuizEl.addEventListener("click", startQuiz);
