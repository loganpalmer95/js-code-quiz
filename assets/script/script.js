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
    var answer1 = document.getElementById("choice-1")
    answer1.addEventListener("click", () => answer1Clicked(answer1));
    function answer1Clicked(button){
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
    function answer2Clicked(button){
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
    function answer3Clicked(button){
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
    window.alert("Time is up!")
}

function reduceTime() {
    timer = timer - 5
}

function addScore() {
    userScore = userScore + 25
    var scoreView = document.getElementById("score-view")
    scoreView.textContent = userScore
}

// Save user input and high score at end of questions
// At end of quiz have ability to start over and view high scores and username
// Add styles
