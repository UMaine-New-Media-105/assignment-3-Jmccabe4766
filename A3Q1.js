/* 
  Joseph McCabe
  NMD 105
  03/1/2023

  Assignment 3 Question 1
*/

function setup() {
  createCanvas(400, 400);
groundY = 340;
  jasonHeight = 50;
  jasonWidth = 50;
  jasonX = 0;
  speed = 5;
  knifeY = 0
  knifeIsFalling = false;
  JasonIsHit = false;
}


function draw() { //Draw Jason mask
  background(160)
  
  drawingContext. shadowOffsetX = 5;
  drawingContext. shadowOffsetY = 5;
  drawingContext. shadowBlur = 10;
  drawingContext. shadowColor = 'black';
  
fill('slateGrey');
  rect(0,350,400,100);
  noFill();
  fill('Wheat');
  ellipse(110,320,70,80);
  fill('white');
  ellipse(100,310,10,10);
  ellipse(120,310,10,10);
  noFill();
  ellipse(95, 323,2,2);
  ellipse(90,329,2,2);
  ellipse(88,320,2,2);
  ellipse(128,329,2,2);
  ellipse(133,320,2,2);
  ellipse(125,323,2,2);
  fill('red');
  triangle(110,303,96,290, 125,290);
  noFill();
  ellipse(110,325,2,2);
  ellipse(103,335,2,2);
  ellipse(117,335,2,2);
  ellipse(119,343,2,2);
  ellipse(101,343,2,2);
  ellipse(101,350,2,2);
  ellipse(119, 350, 2,2);
  ellipse(126,338,2,2);
  ellipse(131,344,2,2);
  ellipse(94,338,2,2);
  ellipse(89,344,2,2);
}

