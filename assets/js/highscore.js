var highscore = document.querySelector("#highscore");
var clear = document.querySelector(".btn-clear");
var goBack = document.querySelector(".btn-goBack");

// clear score
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});


// retrieve values from local storage
var scoreRecords = localStorage.getItem("scoreRecords");
scoreRecords = JSON.parse(scoreRecords);

if (scoreRecords !== null) {
    for (var i = 0; i < scoreRecords.length; i++){
        var createListEl = document.createElement("li");
        createListEl.textContent = scoreRecords[i].initials + " - " + scoreRecords[i].score;
        highscore.appendChild(createListEl);
    }
}

// add event listener to bring back to the index or home page
goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
});