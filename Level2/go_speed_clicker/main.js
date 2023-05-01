localStorage.setItem("countdown", 30);
const timer = document.getElementById("timer");
timer.textContent = "0:30";

const clickDisplay = document.getElementById("clicks");
if (localStorage.clicks) {
    clickDisplay.textContent = localStorage.clicks;
}
else {
    localStorage.clicks = 0;
    clickDisplay.textContent = localStorage.clicks;
}

//interval countdown timer 
    //event listener inside that listens for clicks 
function recordClicks() {
    if(localStorage.clicks) {
        localStorage.clicks = JSON.parse(localStorage.clicks) + 1;
    }
    else {
        localStorage.setItem("clicks", 1);
    }
    clickDisplay.textContent = localStorage.clicks;
}

function countdown() {
    localStorage.countdown = JSON.parse(localStorage.countdown) - 1;
    if (localStorage.countdown < 10) {
        timer.textContent = `0:0${localStorage.countdown}`;
    }
    else {
        timer.textContent = `0:${localStorage.countdown}`;
    }
    
}

function stopCountdownAndClicks() {
    clearInterval(intervalID);
    document.removeEventListener("click", recordClicks);
}

document.addEventListener("click", recordClicks);

const intervalID = setInterval(countdown, 1000);

setTimeout(stopCountdownAndClicks, 30000);
//timeout 
