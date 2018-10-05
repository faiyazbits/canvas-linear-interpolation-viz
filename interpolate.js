/**
 * Created by faiyaz on 10/12/2015.
 */
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    x = 0,
    y = 0,
    interButton = document.getElementsByName("interpolate");
    startX = document.getElementById("startX").value,
    endX = document.getElementById("endX").value,
    startY = document.getElementById("startY").value,
    endY = document.getElementById("endY").value;
context.font = "14px Verdana";
var ratio = 0;
var intervalHandler = null;
function drawAxes() {
    context.beginPath();
    context.arc(100, 500, 3, 0, 2 * Math.PI);
    context.stroke();
    context.moveTo(100, 500);
    context.lineTo(1000, 500);
    context.stroke();
    context.moveTo(100, 500);
    context.lineTo(100, 90);
    context.stroke();
    context.closePath();

}
var acquirePointValues = function () {
    startX = document.getElementById("startX").value;
    endX = document.getElementById("endX").value;
    startY = document.getElementById("startY").value;
    endY = document.getElementById("endY").value;
    console.log(startX, startY, endX, endY);
};
function drawVector(x1, y1, x2, y2) {
    drawAxes();
    context.save();
    context.beginPath();
    context.moveTo(x1, y1);
    context.fillText("startPoint", x1, y1);
    context.lineTo(x2, y2);
    context.fillText("endPoint", x2, y2);
    context.lineWidth = 2;
    context.strokeStyle = "brown";
    context.stroke();
    context.closePath();
    context.restore();
}
function drawStaticLine() {
    acquirePointValues();
    context.clearRect(0, 0, width, height);
    drawVector(startX, startY, endX, endY);
}
function interpolate(x1, y1, x2, y2, ratio) {
    var X1 = parseInt(x1),
        Y1 = parseInt(y1),
        X2 = parseInt(x2),
        Y2 = parseInt(y2);
    x = X1 + (X2 - X1) * ratio;
    y = Y1 + (Y2 - Y1) * ratio;
    //context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, 7, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

}
function animate() {
    context.clearRect(0, 0, width, height);
    acquirePointValues();
    drawStaticLine();
    interpolate(startX, startY, endX, endY, ratio);
    if(ratio<0.99) {
        ratio += 0.1;
    }else{
        ratio=0;
    }
}
drawAxes();
var onInterpolateClick = function () {
    animate();
    intervalHandler= setInterval(animate,1000);
};







