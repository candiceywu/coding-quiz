// variables
var totalHighscores = document.querySelector(".highscores");
var timeCount = document.querySelector(".timer-count");
var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#next-button");
var main = document.querySelector(main);
var questionToDisplay = document.querySelector("#description");
var quizInstructions = document.querySelector("#instructions");
var scoreboard = document.querySelector("#score-board");
var userInitials = document.querySelector("#initials-text");
var scoreCount = document.querySelector("#score-count");
var scoreBox = document.querySelector(".enter-initials");

// multiple choice questions
var mc1 = document.querySelector("#mc1");
var mc2 = document.querySelector("#mc2");
var mc3 = document.querySelector("#mc3");
var mc4 = document.querySelector("#mc4");
var showAnswer = document.querySelector("#show-answer");

var questionNum = 0;
var currentQuestion = "";
var isCorrect = "";
var initials ="";
var finalScore = 0; 


// timer variables
var count = 60;
var timer;


// intro page
document.getElementById("introduction").textContent = "Let's test your coding knowledge!";

// question bank (5 questions)
var questionSet1 = {
    qPrompt: "Where in HTML do you link a Javascript file?",
    option1: "1. In the header",
    option2: "2. At the bottom right before the closing tag body",
    option3: "3. After closing tag body",
    option4: "4. Before the CSS file link",
    answer: 2
};

var questionSet2 = {
    qPrompt: "What does .shift do?",
    option1: "1. Removes the last element from an array",
    option2: "2. Adds an element to the end of the array",
    option3: "3. Removes the first element from an array",
    option4: "4. Adds an element to the beginning of the array",
    answer: 3
};

var questionSet3 = {
    qPrompt: "What is NOT a primitive data type?",
    option1: "1. Null",
    option2: "2. String",
    option3: "3. Number",
    option4: "4. True/False",
    answer: 4
};

var questionSet4 = {
    qPrompt: "What does API stand for?",
    option1: "1. Application Programming Interface",
    option2: "2. Associated Platform Internet",
    option3: "3. Applicable Progam Interaction",
    option4: "4. Applied Preface Instance",
    answer: 1
};

var questionSet5 = {
    qPrompt: "What is a console log?",
    option1: "1. It is a way to display a message on the debugging console",
    option2: "2. It is a method",
    option3: "3. It is a variable",
    option4: "4. It connects to your HTML",
    answer: 1
};

// array that holds all 5 questions
var questionBank = [questionSet1, questionSet2, questionSet3, questionSet4, questionSet5];
var currentQuestion = questionBank[questionNum];


// starts timer when "start" button is clicked
document.addEventListener("click", function (event) {
    if (event.target === startButton) {
        updateApp();
        startTimer();
    }
});


// function that sets timer
function startTimer() {
    timer = setInterval(function () {
        count--;
        console.log(count);
        timeCount.textContent = count;

        if (count === 0) {
            // stops execution of action at set interval
            clearInterval(timer);
        }

    }, 1000); // timer is a loop, iterates 
}

function updateApp() {
    if (questionNum < 5) {
    currentQuestion = questionBank[questionNum];
    questionToDisplay.textContent = currentQuestion.qPrompt;
    mc1.textContent = currentQuestion.option1;
    mc2.textContent = currentQuestion.option2;
    mc3.textContent = currentQuestion.option3;
    mc4.textContent = currentQuestion.option4;
    return currentQuestion;
    }
    else {
        clearInterval(timer);
        return questionNum;
    
        // // do i add something here for if we 'return questionNum', else mc4.setAttribute("style, "display: none");
        // scoreBox.setAttribute("style", "display: block");

        
    }
};


// when you click start button, start button should disappear and other buttons appear/disappear
document.addEventListener("click", function (event) {
    if (event.target === startButton) {
        updateApp();
        startButton.setAttribute("style", "display: none;");
        quizInstructions.setAttribute("style", "display: none");
        mc1.setAttribute("style", "display: block;");
        mc2.setAttribute("style", "display: block;");
        mc3.setAttribute("style", "display: block;");
        mc4.setAttribute("style", "display: block;");
    };
});


// event listener for correct/incorrect buttons
document.addEventListener("click", function (event) {
    if (event.target === mc1 || event.target === mc2 || event.target === mc3 || event.target === mc4) {
        if (event.target.textContent[0] == currentQuestion.answer) {
            showAnswer.textContent = "Correct!";
            isCorrect = "Correct!";
            questionNum++;
            finalScore++;
            // winCounter++; //is not logging 
            updateApp();
            console.log(isCorrect);
            console.log(finalScore);
        
        } else {
            showAnswer.textContent = "Incorrect!";
            isCorrect = "Incorrect!";
            questionNum++;
            count -= 10;
            updateApp();
            console.log(isCorrect);
        };
    }
    scoreCount.textContent= "Scoreboard: " + finalScore;
});


// local storage 

// localStorage.setItem for storage
var userScore = localStorage.setItem("highscore", finalScore);
var storedInitials = localStorage.setItem("initials-text", userInitials);



// localStorage.getItem to pull it back up
var highscore = localStorage.getItem("highscore");
var currentInitials = localStorage.getItem("initials");





