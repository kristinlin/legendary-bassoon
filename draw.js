var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
//rectangle = 1; circle = -1
var mode = 1;

var draw = function(e) {

    //draw line connecting the previous node to current one
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    
    //if rect mode else circle mode; draw on cleared path
    if (mode == 1) {
	ctx.fillStyle="#2382c2";
	ctx.fillRect(e.offsetX, e.offsetY, 25, 25);
    } else {
	ctx.fillStyle="#199112";
	ctx.arc(e.offsetX, e.offsetY, 13, 0, 2*Math.PI);
	ctx.fill();
    }

    //clear path of circle, but keep the clicked location
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

var clearing = function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

var toggling = function(e) {
    mode *= -1;
}

canvas.addEventListener("click", draw);
clear.addEventListener("click", clearing);
toggle.addEventListener("click", toggling);
