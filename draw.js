canvas = document.getElementById("board");
ctx = canvas.getContext("2d");
clear = document.getElementById("clear");
toggle = document.getElementById("toggle");

var clearing = function(e) {
    ctx.clearRect(0, 0, 500, 500);
}

clear.addEventListener("click", clearing);
toggle
