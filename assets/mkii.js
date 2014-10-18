// when page opens
$(document).ready(function () {
  // Set up canvas
  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");
  var w = $("#canvas").width();
  var h = $("#canvas").height();

  // set the canvas border
  ctx.StrokeStyle = "black";
  ctx.strokeRect(0, 0, w, h);

  // background
  var bg = new Image();
  bg.onload = function() {
    ctx.drawImage(bg, 0, 0);
  };
  bg.src = "assets/imgs/test_background.jpg";

  // foreground
  var fg = new Image();
  fg.onload = function() {
    ctx.drawImage(fg, 0, 400);
  };
  fg.src = "assets/imgs/test_background.jpg";
});

