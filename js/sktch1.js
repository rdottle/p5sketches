var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(500, 500);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
  noLoop();  // Run once and stop
}


function draw() {
  background(255);
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
 
colorMode(HSB, 500, 50, 1, 1);
for (i = 0; i < 1000; i++) {
  for (j = 0; j < 1000; j++) {
    stroke(i, j, 100);
    rect(i, j, 10, 10);
  }
}
for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(255, 0.09);
      noFill();
      rect(x + spacer/2, y + spacer/2, 10, 10);
    }
  }
}