var chrono = document.getElementsByClassName("chrono")[0];
var start = document.getElementsByClassName("start")[0];
var stop = document.getElementsByClassName("stop")[0];
var reset = document.getElementsByClassName("reset")[0];


var secs = 0;
var min = 0;

var t;

chrono.textContent = "00:00";

function tick() {
    secs++;
    if (secs > 59)
    {
        secs = 0;
        min++;
    }
}

function add() {
    tick();
    var secs_str = (secs > 9) ? `${secs}`: "0" + `${secs}`;
    var min_str = (min > 9) ? `${min}`: "0" + `${min}`;
    chrono.textContent = min_str + ":" + secs_str;
    time();
}

function time() {
    t = setTimeout(add, 1000);
}

time();

start.onclick = function (){
    if (t === null)
        time();
};

stop.onclick = function () {
    clearTimeout(t);
    t = null;
};

reset.onclick = function () {
    secs = 0;
    min = 0;
    chrono.textContent = "00:00"
}

