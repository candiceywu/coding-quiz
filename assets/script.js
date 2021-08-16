// variables
var finalScore = [];
var highscores = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var main = document.querySelector(main);
var mc1 = document.querySelector("#mc1");
var mc2 = document.querySelector("#mc2");
var mc3 = document.querySelector("#mc3");
var mc4 = document.querySelector("#mc4");
var answer = document.querySelector("#answer");
var countdown = document.querySelector("#timer");

// intro page
document.getElementById("#introduction").textContent = "Let's test your coding knowledge!";
document.getElementById("#description").textContent = "Do your best to answer these multiple-choice questions. There's a 60-second timer at the top-right corner, but if you answer a question incorrectly, 10 seconds will be docked from the countdown."
document.getElementById("#start").textContent = "Start";