canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_positionX;
var last_positionY;
color = "blue";
line_width = 1;
mouseEvent = "empty";
canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
     color = document.getElementById("color").value;
     line_width = document.getElementById("lineWidth").value;
     mouseEvent = "mousedown"
     console.log(color,line_width);
 }
 canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
     current_positionX = e.clientX - canvas.offsetLeft;
     current_positionY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
         console.log("Last position of X and Y = ")
         console.log("x = "+last_positionX+"y = "+last_positionY);
         ctx.moveTo(last_positionX,last_positionY);
         console.log("Current position of X and Y = ")
         console.log("x = "+current_positionX+"y = "+current_positionY);
         ctx.lineTo(current_positionX,current_positionY);
         ctx.stroke();
    }
   last_positionX = current_positionX;
   last_positionY = current_positionY;
 }
 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent = "mouseleave";
 }
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseEvent = "mouseup"
 }
function AreaClear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}