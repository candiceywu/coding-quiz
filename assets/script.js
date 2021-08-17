// variables
var highscores = document.querySelector("#highscores");
var timerCountdown = document.querySelector(".timer-count");
var startButton = document.querySelector("#start");
var main = document.querySelector(main);
var mcAll = document.querySelector("#question-set");


// multiple choice questions
var mc1 = document.querySelector("#mc1");
var mc2 = document.querySelector("#mc2");
var mc3 = document.querySelector("#mc3");
var mc4 = document.querySelector("#mc4");
var answer = document.querySelector("#answer");

var finalScore = [];
var winCounter = 0;
var loseCounter = 0;
var isCorrect = false;
var currentQuestions = 0;
var questionNum = 0;
var currentQuestion = "";


var questionSet1 = {
    prompt: "Where in HTML do you link a Javascript file?",
    answer1: "1. In the header",
    answer2: "2. At the bottom right before the closing tag body",
    option3: "3. After closing tag body",
    option4: "4.",
    correctAnswer: 2
};

var questionSet2 = {
    prompt: "Where in HTML do you link a Javascript file?",
    answer1: "1. In the header",
    answer2: "2. At the bottom right before closing tag body",
    option3: "3. After closing tag body",
    option4: "4.",
    correctAnswer: 2 
};

var questionSet3 = {
    prompt: "Where in HTML do you link a Javascript file?",
    answer1: "1. In the header",
    answer2: "2. At the bottom right before closing tag body",
    option3: "3. After closing tag body",
    option4: "4.",
    correctAnswer: 2 
};

var questionSet4 = {
    prompt: "Where in HTML do you link a Javascript file?",
    answer1: "1. In the header",
    answer2: "2. At the bottom right before closing tag body",
    option3: "3. After closing tag body",
    option4: "4.",
    correctAnswer: 2 
};

var questionSet5 = {
    prompt: "Where in HTML do you link a Javascript file?",
    answer1: "1. In the header",
    answer2: "2. At the bottom right before closing tag body",
    option3: "3. After closing tag body",
    option4: "4.",
    correctAnswer: 2
};

var questionBank = [questionSet1, questionSet2, questionSet3, questionSet4, questionSet5];

var currentQuestion = questionBank[questionNum];
console.log(currentQuestion.prompt);


mc1.textContent = currentQuestion.answer1;
mc2.textContent = currentQuestion.answer2;
mc3.textContent = currentQuestion.answer3;
mc4.textContent = currentQuestion.answer4;

// event listener 
if (currentQuestion.answer1[0] == currentQuestion.answer) {
    console.log("Correct!");
    questionNum++;
}  else {
    console.log("Wrong!");
};

mc1.textContent = currentQuestion.answer1;

// intro page
document.getElementById("introduction").textContent = "Let's test your coding knowledge!";
document.getElementById("description").textContent = "Do your best to answer these multiple-choice questions. There's a 60-second timer at the top-right corner, but if you answer a question incorrectly, 10 seconds will be docked from the countdown.";

// init function is called when the page loads (refer to student mini project)




// need to hide "start" button, hide introduction, change "desciption" to the questions, and show "next" button.

// questions 
// user has 4 multiple choice options, clicks on one



// each button needs to have an event click
// event.target 
// display correct or incorrect alert
// if incorrect, need to dock 10 seconds from timer
// have next button that when clicks to next page
// this cycles 5 times
// create an object for each question 


// // timer
// var count = 60;
// var timer;

// function startTimer() {
//     // sets timer
//     timer = setInterval(function () {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (timerCount >= 0) {
//             // tests if answer is incorrect
//             if (isCorrect) {
//                 timerCount - 10;
//             }
//         }

//         if (secondsLeft === 0) {
//             // stops execution of action at set interval
//             clearInterval(timerInterval);
//         }

//     }, 60000); //one minute 
// }

// startTimer();


// use local storage