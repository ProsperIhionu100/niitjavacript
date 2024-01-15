const canvas = document.getElementById('myCanvas')
// Creating our drawing object (This is the drawing style )
const ctx = canvas.getContext('2d');

// Get the color you want to work with 
// ctx.fillStyle = "red";
// // Draw a rectangle 
// // ctx.fillRect(0, 0, 200, 300)
// // ctx.clearRect(20, 20, 100, 100);

// // ctx.fillStyle = "blue";
// // ctx.fillRect(500, 200, 100, 100)


// // ctx.fillStyle = "yellow";
// // ctx.fillRect(450,300, 100, 100)
// // x = (canvas.width / 2) - (rect.width / 2)
// // y = (canvas.height / 2) - (rect.height / 2)

// // Drawing a line
// ctx.strokeStyle = "blue";
// ctx.moveTo(300, 500); // x1, y1
// ctx.lineTo(750, 500); // x2, y2
// ctx.lineWidth = 5;
// ctx.stroke();

// // Drawing a circle 
// ctx.beginPath();
// ctx.arc(100, 100, 40, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.fill();

// ctx.strokeStyle = "green"
// ctx.fillStyle = "red"
// ctx.beginPath();
// ctx.arc(300, 300, 40, 0, Math.PI);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

// Draw the Nigerian, German and French Flags.
// draw an emoji face

// Draw Texts
ctx.font = "100px Arial";
// ctx.fillText("Hello world!", 60, 300)
ctx.textAlign = "center";
ctx.strokeText("Hello world!", canvas.width/2, canvas.height/2)

const img = new Image()
img.src = "prod12.jpg";

window.onload = function () {
    ctx.drawImage(img, 0,0, 200, 200) 
}

