var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
//rectangle = 1; circle = -1
var mode = 1;

var draw = function(e) {

    //find the coors after finding the measurements of borders
    var domRECT = canvas.getBoundingClientRect();
    x = e.clientX - domRECT.left;
    y = e.clientY - domRECT.top;

    //clear the path 
    ctx.beginPath();

    //if rect mode else circle mode
    if (mode == 1) {
	ctx.fillStyle="#2382c2";
	ctx.fillRect(x, y, 25, 25);
    } else {
	ctx.fillStyle="#199112";
	ctx.arc(x, y, 13, 0, 2*Math.PI);
	ctx.fill();
    }
}

var clearing = function(e) {
    ctx.clearRect(0, 0, 500, 500);
}

var toggling = function(e) {
    mode *= -1;
}

canvas.addEventListener("click", draw);
clear.addEventListener("click", clearing);
toggle.addEventListener("click", toggling);
