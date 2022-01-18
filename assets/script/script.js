var myInterval = null
var duration = 59
var timer = duration, seconds;
var display = document.querySelector('#time');
var currentQuestion = 0
var userScore = 0

let answers = []

let questions = [
    {
        question: "What is a function?",
        choice1: "A set of statements that performs a task or calculates a value.",
        choice2: "An array",
        choice3: "A truthy statment",
        answer: 1
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<script>",
        choice2: "<js>",
        choice3: "<javascript",
        answer: 1
    }, {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "The <body> section.",
        choice2: "The <head> section.",
        choice3: "Both are correct.",
        answer: 1
    }, {
        question: "How do you create a function in Javascript?",
        choice1: "function myFunction()",
        choice2: "function = myFunction()",
        choice3: "function:myFunction()",
        answer: 1
    }, {
        question: "How do you call a function?",
        choice1: "myFunction()",
        choice2: "call myFunction()",
        choice3: "callFunction myFunction()",
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
    var answer1 = document.getElementById("choice-1")
    answer1.addEventListener("click", () => answer1Clicked(answer1));
    function answer1Clicked(button) {
        answers.push(1);
        if (1 != questions[currentQuestion].answer) {
            reduceTime();
        }
        else {
            addScore()
        }
        currentQuestion++
        startQuiz();
    }

    var answer2 = document.getElementById("choice-2")
    answer2.addEventListener("click", () => answer2Clicked(answer2));
    function answer2Clicked(button) {
        answers.push(2);
        if (2 != questions[currentQuestion].answer) {
            reduceTime();
        }
        else {
            addScore()
        }
        currentQuestion++
        startQuiz();
    }

    var answer3 = document.getElementById("choice-3")
    answer3.addEventListener("click", () => answer3Clicked(answer3));
    function answer3Clicked(button) {
        answers.push(3);
        if (3 != questions[currentQuestion].answer) {
            reduceTime();
        }
        else {
            addScore()
        }
        currentQuestion++
        startQuiz();
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
    if (currentQuestion > questions.length - 1) {
        window.alert("Quiz is finished!")
        endTimer();
        currentQuestion = 0
        document.getElementById("user-input").style.visibility = "visible";
        document.getElementById("answer-view").style.visibility = "hidden";
        saveScore();
        return;
    }

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
}

function reduceTime() {
    timer = timer - 5
}

function addScore() {
    userScore = userScore + 20
    var scoreView = document.getElementById("score-view")
    scoreView.textContent = "User Score: " + userScore
}

function saveScore() {
    document.getElementById("high-score-input")
    var scoreSave = document.getElementById("score-save")
    scoreSave.addEventListener("click", () => scoreSaveClicked(scoreSave));
    function scoreSaveClicked(button) {
        console.log("here")
        var initialsInput = document.getElementById("high-score-input")
        var userId = initialsInput.textContent
        var myStorage = window.localStorage;
        myStorage.setItem(userId, userScore)
        userScore = 0
        var scoreView = document.getElementById("score-view")
        scoreView.textContent = "User Score: " + userScore
        showIntro();
    }
}

function showIntro() {
    document.getElementById("start-view").style.visibility = "visible";
    document.getElementById("user-input").style.visibility = "hidden";
    document.getElementById("main-text").textContent = "Welcome to the Javascript Quiz!"
}

// Save user input and high score at end of questions
// At end of quiz have ability to start over and view high scores and username
// Add styles
