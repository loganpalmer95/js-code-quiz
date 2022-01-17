var myInterval = null
var duration = 59
var timer = duration, seconds;
var display = document.querySelector('#time');

let questions = [
    {
        question: "What is a function?", 
        choice1: "A set of statements that performs a task or calculates a value.",
        choice2: "An array",
        choice3: "A truthy statment",
        answer: 1
    },
    {
        question: "What is a function?", 
        choice1: "A set of statements that performs a task or calculates a value.",
        choice2: "An array",
        choice3: "A truthy statment",
        answer: 1
    },    {
        question: "What is a function?", 
        choice1: "A set of statements that performs a task or calculates a value.",
        choice2: "An array",
        choice3: "A truthy statment",
        answer: 1
    },    {
        question: "What is a function?", 
        choice1: "A set of statements that performs a task or calculates a value.",
        choice2: "An array",
        choice3: "A truthy statment",
        answer: 1
    },    {
        question: "What is a function?", 
        choice1: "A set of statements that performs a task or calculates a value.",
        choice2: "An array",
        choice3: "A truthy statment",
        answer: 1
    },
]

window.onload = function () {
    var button = document.getElementById("start-button")
    button.addEventListener('click', () => myFunction(button));
    function myFunction(button) {
        hideIntro();
        startQuiz();
        showAnswers();
    }
};

function hideIntro() {
    document.getElementById("start-view").style.visibility = "hidden";
    startTimer(display);
}

function startTimer(display) {
    myInterval = setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        display.textContent = "Timer: " + seconds;
        if (--timer < 0) {
            endTimer();
        }
    }, 1000);
}

function startQuiz() {
    var currentQuestion = 0 
    var mainText = document.getElementById("main-text")
    mainText.textContent = questions[currentQuestion].question
    
    var choice1 = document.getElementById("choice-1")
    choice1.textContent = questions[currentQuestion].choice1
    var choice2 = document.getElementById("choice-2")
    choice2.textContent = questions[currentQuestion].choice2
    var choice3 = document.getElementById("choice-3")
    choice3.textContent = questions[currentQuestion].choice3
}

function showAnswers() {
    document.getElementById("answer-view").style.visibility = "visible";
}

function endTimer() {
    clearInterval(myInterval)
    window.alert("Time is up!")
}

function reduceTime() {
    timer = timer - 5
}
