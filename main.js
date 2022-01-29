//Create a reference for canvas 

//Give specific height and width to the car image

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=100;
greencar_height=90;
greencar_x=5;
greencar_y=225;
background_image = "parkingLot.jpg";
greencar_image="car2.png";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = parkingLot.jpg;

    greencar_imgTag = new Image();
greencar_imgTag.onload = uploadcar;
    greencar_imgTag.src = car2.png;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0 , canvas.width, canvas.height);
}
function uploadcar() {
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y ,greencar_width, greencar_height);
}
window.addEventListener("keydown" , my_keydown);
 function my_keydown(e)
 {
     keyPressed = e.keyCode;
     console.log(keyPressed);
 }

 if(keyPressed == '38')
 {
     up();
     console.log("up");
 }

 if(keyPressed == '40')
 {
     down();
     console.log("down");
 }
 if(keyPressed == '37')
 {
     left();
     console.log("left");
 }
 if(keyPressed == '39')
 {
     right();
     console.log("right");
 }

