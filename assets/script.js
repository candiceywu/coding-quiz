// variables
var finalScore = [];
var highscores = document.querySelector("#highscores");
var timerCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var main = document.querySelector(main);
var mcAll = document.querySelector("#question-set");
var mc1 = document.querySelector("#mc1");
var mc2 = document.querySelector("#mc2");
var mc3 = document.querySelector("#mc3");
var mc4 = document.querySelector("#mc4");
var answer = document.querySelector("#answer");

// intro page
document.getElementById("introduction").textContent = "Let's test your coding knowledge!";
document.getElementById("description").textContent = "Do your best to answer these multiple-choice questions. There's a 60-second timer at the top-right corner, but if you answer a question incorrectly, 10 seconds will be docked from the countdown.";


// question 1 
// user has 4 multiple choice options, clicks on one
// each button needs to have an event click
// event.target 
// display correct or incorrect alert
// if incorrect, need to dock 10 seconds from timer
// this cycles 5 or 6 times

// final page - local storage


// timer
var secondsLeft = 60; //might need to change

function setTime() {
    // sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countdown.textContent = secondsLeft + "seconds";

        if (secondsLeft === 0) {
            // stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 60000); //one minute 
}

setTime();