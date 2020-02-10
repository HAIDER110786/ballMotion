
var x = 10, y = 10;
var num = 0;
var context;
var image = new Image();
var image1 = new Image();
var timer;
var canvas = document.getElementById("mycanvas");

context = canvas.getContext("2d");

window.onload = anim();
function anim() {
   console.log("calling")
    image.src = "images/basketball.bmp";
    image1.src = "images/train.gif";

    
   

    // document.body.ondblclick=function()
    // {
    // timer=0;
    // clearInterval(timer);
    // }

    

}
context.drawImage(image, x, y, 50, 50);




function move() {

    image1.src = "images/basket.bmp";
    image.src = "images/basketball.bmp";
    context.clearRect(0, 0, 500, 500);
    context.drawImage(image1, 420, 420, 70, 70);
    context.drawImage(image, x, y, 50, 50);
    x += 1;
    y += 1;
    if(x>=430&&y>=430)
    {
        clearInterval(timer);
    }
}

document.body.onclick = function () {
    if (num % 2 == 0) {
        timer = setInterval(move, 1);
        num = num + 1;
    }
    else {
        clearInterval(timer);
        num=0;
    }
}
