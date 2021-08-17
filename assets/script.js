// variables
var highscores = document.querySelector("#highscores");
var timerCountdown = document.querySelector(".timer-count");
var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#next-button");
var main = document.querySelector(main);
var questionToDisplay = document.querySelector("#description");
var count = document.querySelector("#timer-count");


// multiple choice questions
var mc1 = document.querySelector("#mc1");
var mc2 = document.querySelector("#mc2");
var mc3 = document.querySelector("#mc3");
var mc4 = document.querySelector("#mc4");
var answer = document.querySelector("#answer");
var showAnswer = document.querySelector("#show-answer");
var finalScore = [];
var winCounter = 0;
var loseCounter = 0;
var isCorrect = false;
var currentQuestions = "";
var questionNum = 0;
var currentQuestion = "";

// intro page
document.getElementById("introduction").textContent = "Let's test your coding knowledge!";

// question bank (5 questions)
var questionSet1 = {
    prompt: "Where in HTML do you link a Javascript file?",
    option1: "1. In the header",
    option2: "2. At the bottom right before the closing tag body",
    option3: "3. After closing tag body",
    option4: "4. Before the CSS file link",
    answer: 2
};

var questionSet2 = {
    prompt: "What does .shift do?",
    option1: "1. Removes the last element from an array",
    option2: "2. Adds an element to the end of the array",
    option3: "3. Removes the first element from an array",
    option4: "4. Adds an element to the beginning of the array",
    answer: 3
};

var questionSet3 = {
    prompt: "What is NOT a primitive data type?",
    option1: "1. Null",
    option2: "2. String",
    option3: "3. Number",
    option4: "4. True/False",
    answer: 4
};

var questionSet4 = {
    prompt: "What does API stand for?",
    option1: "1. Application Programming Interface",
    option2: "2. Associated Platform Internet",
    option3: "3. Applicable Progam Interaction",
    option4: "4. Applied Preface Instance",
    answer: 1
};

var questionSet5 = {
    prompt: "What is a console log?",
    option1: "1. It is a way to display a message on the debugging console",
    option2: "2. It is a method",
    option3: "3. It is a variable",
    option4: "4. It connects to your HTML",
    answer: 1
};

var questionBank = [questionSet1, questionSet2, questionSet3, questionSet4, questionSet5];
var currentQuestion = questionBank[questionNum];
console.log(currentQuestion.prompt);

function updateApp() {
    currentQuestion = questionBank[questionNum];
    questionToDisplay.textContent = currentQuestion.prompt;
    mc1.textContent = currentQuestion.option1;
    mc2.textContent = currentQuestion.option2;
    mc3.textContent = currentQuestion.option3;
    mc4.textContent = currentQuestion.option4;
    return currentQuestion;
};

// when you click start button, it should disappear
// mc buttons 1-4 should be hidden and when button is clicked, they should show up
// start button will then disappear (hidden? set attribute?)
// Description will need to turn into question prompt

document.addEventListener("click", function (event) {
    if (event.target === startButton) {
        updateApp();
        startButton.setAttribute("style", "display: none;");
        mc1.setAttribute("style", "display: block;");
        mc2.setAttribute("style", "display: block;");
        mc3.setAttribute("style", "display: block;");
        mc4.setAttribute("style", "display: block;");
    };
});

// document.addEventListener("click", function (event) {
//     if (event.target === nextButton) {
//         updateApp();
//     };
// });

// event listener 
document.addEventListener("click", function (event) {
    if (event.target === mc1 || event.target === mc2 || event.target === mc3 || event.target === mc4) {
        if (event.target.textContent[0] == currentQuestion.answer) {
            showAnswer.textContent = "Correct!";
            // delay function?
            questionNum++;
            updateApp();
            finalScore++;
            console.log(questionNum);
        } else {
            showAnswer.textContent = "Incorrect!";
            questionNum++;
            updateApp();
            console.log(questionNum);
        };
    }
});

// if current question is greater than current, do not increment but still allow to move on

// // timer
// var count = 60;
// var timer;

// //need to add eventListener for when "start" button is clicked, the counter begins
// document.addEventListener("click", function (event) {
//     if (event.target === startButton) {
//         updateApp();
//         function startTimer() {
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

