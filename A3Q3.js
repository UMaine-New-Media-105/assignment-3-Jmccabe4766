/* 
  Joseph McCabe
  NMD 105
  03/22/2022

  Assignment 3 Question 3
  task:drop a seed
*/
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  //declare global variables
  knifeX = random(400);
  knifeY = -75;
  speed = 5;
  knifeIsFalling = true;
}
// draw sprite and seed
function draw() {
  background(260);
  fill("slategrey");
  rect(0, 350, width, width);
  //Add the seed which is the knife
  addKnife(knifeX, knifeY);
  //add sprite Jason
  addJason(mouseX, 320);
}
//knife falling
function addKnife(x, y) {
  push();
  translate(knifeX, knifeY);
  fill("red");
  rect(90, 90, 32, 10);
  rect(100, 75, 12, 15);
  fill("slategrey");
  triangle(99, 100, 106, 150, 112, 100);
  pop();
}

//add sprite,
function addJason(x, y) {
  //Draw Jason mask sprite
  push();
  translate(mouseX - 75, y - 320);

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";

  fill("slateGrey");
  //rect(0, 350, 400, 100); 
  noFill();
  fill("Wheat");
  ellipse(110, 320, 70, 80);
  fill("white");
  ellipse(100, 310, 10, 10);
  ellipse(120, 310, 10, 10);
  noFill();
  if (mouseIsPressed) {
    // when mouse is pressed mask turns red
    fill("red");
    ellipse(110, 320, 70, 80);
    fill("white");
    ellipse(100, 310, 10, 10);
    ellipse(120, 310, 10, 10);
  }
  noFill();
  ellipse(95, 323, 2, 2);
  ellipse(90, 329, 2, 2);
  ellipse(88, 320, 2, 2);
  ellipse(128, 329, 2, 2);
  ellipse(133, 320, 2, 2);
  ellipse(125, 323, 2, 2);
  fill("red");
  triangle(110, 303, 96, 290, 125, 290);
  noFill();
  ellipse(110, 325, 2, 2);
  ellipse(103, 335, 2, 2);
  ellipse(117, 335, 2, 2);
  ellipse(119, 343, 2, 2);
  ellipse(101, 343, 2, 2);
  ellipse(101, 350, 2, 2);
  ellipse(119, 350, 2, 2);
  ellipse(126, 338, 2, 2);
  ellipse(131, 344, 2, 2);
  ellipse(94, 338, 2, 2);
  ellipse(89, 344, 2, 2);

  pop();

  //place sprite at bottom of screen
  noFill();
  //add color to face of sprite


  if (knifeIsFalling) {
    knifeY = knifeY + speed;
  }
  
}
