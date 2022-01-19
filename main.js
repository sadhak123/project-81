canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "black"
ctx.lineWidth = 1
ctx.rect(150, 143, 430, 200)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = ""