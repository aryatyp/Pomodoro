

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

var addw = document.getElementById('addTimeW');
var subtractw = document.getElementById('subtractTimeW');
var addb = document.getElementById('addTimeB');
var subtractb = document.getElementById('subtractTimeB');

var wm = document.getElementById('w_minutes')
var ws = document.getElementById('w_seconds')

var cy = document.getElementById('counter')

var bm = document.getElementById('b_minutes')
var bs = document.getElementById('b_seconds')

const audio = new Audio('./service-bell-ring-14610.mp3');
audio.loop = false;

var startTimer;

addw.addEventListener('click', function () {
    if (startTimer === undefined) {
        wm.innerText++;
    } else {
        alert("Cannot change time while timer is running!")
    }

    if (wm.innerText < 0) {
        wm.innerText++;
    }
})

subtractw.addEventListener('click', function () {
    if (startTimer === undefined) {
        wm.innerText--;
    } else {
        alert("Cannot change time while timer is running!")
    }
    if (wm.innerText < 0) {
        wm.innerText++;
    }
})

addb.addEventListener('click', function () {
    if (startTimer === undefined) {
        bm.innerText++;
    } else {
        alert("Cannot change time while timer is running!")
    }
    if (bm.innerText < 0) {
        bm.innerText++;
    }
})

subtractb.addEventListener('click', function () {
    if (startTimer === undefined) {
        bm.innerText--;
    } else {
        alert("Cannot change time while timer is running!")
    }
    if (bm.innerText < 0) {
        bm.innerText++;
    }
})

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running!")
    }
})

reset.addEventListener('click', function () {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    cy.innerText = 0;
    stopInterval()

})

pause.addEventListener('click', function () {
    stopInterval()
})

function fixSec() {
    if (bs.innerText.length = 1 && bs.innerText > 0 && bs.innerText != "00" && bs.innerText > "10" && bs.innerText != "000"){
        bs.innerText = '0' + bs.innerText;
        console.log('true')
    } else {
        bs.innerText = bs.innerText;
    }
}


function timer() {
    if (ws.innerText != 0) {
        if (ws.innerText < 10){
            wi = "0" + ws.innerText
            wi && ws.innerText--;
        } else ws.innerText--;


    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    if (wm.innerText == 0 && ws.innerText == 0) {

        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        stopInterval();

        document.getElementById('counter').innerText++;

    } else if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0 && cy.innerText == 4) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 25;
        bs.innerText = "00";

        stopInterval()

        document.getElementById('counter').innerText++;
    }
    fixSec();


}

function stopInterval() {
    clearInterval(startTimer);
    startTimer = undefined;
}

function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}