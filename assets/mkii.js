// canvas info
var canvas; var ctx; var w; var h;
// background info
var bg; var bgX; var bgY;
//foreground info
var fg; var fgX; var fgY;

// set everything when page opens
$(document).ready(function () {
  // Set up canvas
  canvas = $("#canvas")[0];
  ctx = canvas.getContext("2d");
  w = $("#canvas").width();
  h = $("#canvas").height();
  // set the canvas border
  ctx.StrokeStyle = "black";
  ctx.strokeRect(0, 0, w, h);

  // set background
  bg = new Image();
  bgX = 0; bgY = 0;
  bg.src = "assets/imgs/test_background.jpg";
  // set foreground
  fg = new Image();
  fgX = 0; fgY = 350;
  fg.src = "assets/imgs/test_background.jpg";
});

// loop (30 FPS)
setInterval(function() { update(); draw(); }, 1000/30);

function update() {
  
}

function draw() {
  ctx.drawImage(bg, bgX, bgY);
  ctx.drawImage(fg, fgX, fgY);
}
