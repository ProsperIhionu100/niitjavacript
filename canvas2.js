const myCanvas = document.getElementById('myCanvas')

const ctx = myCanvas.getContext('2d')

ctx.fillStyle = "green"
ctx.fillRect(50, 50, 200, 300)

ctx.fillStyle = "white"
ctx.fillRect(250, 50, 200, 300)


ctx.fillStyle = "green"
ctx.fillRect(450, 50, 200, 300)

ctx.strokeStyle = "black";
ctx.moveTo(54, 350); // x1, y1
ctx.lineTo(54, 750); // x2, y2
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "white"
ctx.fillStyle = "yellow"
ctx.beginPath();
ctx.arc(800, 480, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = "black"
ctx.beginPath();
ctx.arc(800, 500, 60, 0,  Math.PI);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.arc(760, 445, 10, 0,  2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black"
ctx.beginPath();
ctx.arc(760, 445, 1, 0,  2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = "black"
ctx.fillStyle = "yellow"
ctx.beginPath();
ctx.arc(840, 445, 10, 0,  2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black"
ctx.beginPath();
ctx.arc(840, 445, 1, 0,  2 * Math.PI);
ctx.stroke();
ctx.fill();

const myCanvas2 = document.getElementById('myCanvas2')

const ctx2 = myCanvas2.getContext('2d')

ctx2.fillStyle = "black"
ctx2.fillRect(50, 50, 200, 300)

ctx2.fillStyle = "red"
ctx2.fillRect(250, 50, 200, 300)


ctx2.fillStyle = "yellow"
ctx2.fillRect(450, 50, 200, 300)

ctx2.strokeStyle = "black";
ctx2.moveTo(54, 350); // x1, y1
ctx2.lineTo(54, 750); // x2, y2
ctx2.lineWidth = 5;
ctx2.stroke();

const myCanvas3 = document.getElementById('myCanvas3')

const ctx3 = myCanvas3.getContext('2d')

ctx3.fillStyle = "blue"
ctx3.fillRect(50, 50, 200, 300)

ctx3.fillStyle = "white"
ctx3.fillRect(250, 50, 200, 300)


ctx3.fillStyle = "red"
ctx3.fillRect(450, 50, 200, 300)

ctx3.strokeStyle = "black";
ctx3.moveTo(54, 350); // x1, y1
ctx3.lineTo(54, 750); // x2, y2
ctx3.lineWidth = 5;
ctx3.stroke();
