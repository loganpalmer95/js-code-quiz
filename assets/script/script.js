var myInterval = null
var duration = 59
var timer = duration, seconds;



function startTimer(display) {
    myInterval = setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        display.textContent = "Timer: " + seconds;
        if (--timer < 0) {
            endTimer();
        }
    }, 1000);
}

window.onload = function () {
    display = document.querySelector('#time');
    startTimer(display);
};



function endTimer() {
    clearInterval(myInterval)
    window.alert("Time is up!")
}

function reduceTime() {
   timer = timer - 5
}


