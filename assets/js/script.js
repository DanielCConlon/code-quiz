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

console.log(questionObject);

// starting time
var timeRemaining = 100;

// penalty time
var timePenalty = 15;

// keep track of the question we are in
var questionIndex = 0;

var questionContainer = document.querySelector(".questions-container");
var startQuiz = document.querySelector("#startQuiz");
var counterDownTimerEl = document.querySelector("#countdown-timer")

//  create a new unordered list element
var buttonChoice = document.createElement("ul");



var beginQuiz = function() {
    startCountDown();
    loadQuestions();
    compareChoice();
};
console.log(beginQuiz);





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
var loadQuestions = function(questionIndex) {
    // need to clear everything on the screen to show questions
    questionContainer.innerHTML = "";
    // need to clear button choices
    buttonChoice.innerHTML = "";


    // var questionContainer = document.querySelector(".questions-container");
    
    // loop through array to show question and responses
    for (var i = 0; i < questionObject.length; i++) {
        // defining the question
        var targetQuestion = document.createElement("p");
        targetQuestion.textContent = questionObject[questionIndex].questionPrompt;
        

        // defining the choices
        var questionOption = questionObject[questionIndex].choices;

        // appending the question to the page
        questionContainer.appendChild(targetQuestion);


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

// compare the choice the user makes to the correct answer
var compareChoice = function(event) {
    var userChoice = event.target;

    // if what the user clicks an list element
    if (userChoice.matches("li")) {
        // create a div to hold the correct or wrong notification
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        // define the correct answer from the array as a variable
        var correctAnswer = questionObject[questionIndex].correctChoice

        // checking if the answer picked is correct
        if (userChoice.textContent == correctAnswer) {
            createDiv.textContent = "Correct";
        }
        else {
            // remove time from time remaining and display wrong
            timeRemaining = timeRemaining - timePenalty;
            createDiv.textContent = "Wrong";
        }

    }

    // need to increment questionIndex so it can load the next question
    questionIndex ++;

    // final function, if we have gone through all the questions or time has run out go to stats
    if (questionIndex >= questionObject.length) {
        finalStats;
    }
    else {
        loadQuestions;
    }
    questionContainer.appendChild(createDiv);



};

// will show the final stats from the quiz
var finalStats = function() {
    // wipe the container
    questionContainer.innerHTML = "";

    // create the heading
    var createHead = document.createElement("h1");
    createHead.setAttribute("id", "createHead");
    createHead.textContent = "All Done!";

    questionContainer.appendChild(createHead);

    // create p tag to hold your score
    var createScore = document.createElement("p");
    createScore.setAttribute("id", "createScore");
    createScore.textContent = "Your final score is " + timeRemaining + " .";

    questionContainer.appendChild(createScore);

    // create a label to prompt user to input initials
    var userInputLabel = document.createElement("label");
    userInputLabel.setAttribute("id", "userInputLabel");
    userInputLabel.textContent = "Enter your initials: ";

    questionContainer.appendChild(userInputLabel);

    // get initials from user
    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userInput.setAttribute("id", "userInput");
    userInput.textContent = "";

    questionContainer.appendChild(userInput);

    // creating the submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "button");
    createSubmit.setAttribute("id", "createSubmit");
    createSubmit.textContent = "Submit";

    questionContainer.appendChild(createSubmit);

    // capture initials and score and add to local storage
    createSubmit.addEventListener("click", function() {
        // grab the value the user input for initials
        var userInitials = userInput.value;

        // alert the user they did not fill out initials
        if (userInitials === null){
            alert("You did not fill out initials!");
        }
        else {
            var userScore = {
                initials: userInitials,
                score: timeRemaining
            }

            var scoreRecords = localStorage.getItem("scoreRecords");
            if (scoreRecords === null) {
                scoreRecords = [];
            }
            else {
                scoreRecords = JSON.parse(scoreRecords);
            }

            scoreRecords.push(userScore);

            var newRecord = JSON.stringify(scoreRecords);
            localStorage.setItem("scoreRecords", newRecord);

            // send to the highscores HTML
            window.location.replace("./highscore.html");

        }


    })

};

// event listener to behing the quiz
startQuiz.addEventListener("click", beginQuiz);
console.log(startQuiz);


