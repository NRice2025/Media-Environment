  var size = 30

function setup() {
  createCanvas(400, 400);
  background(255);

 //setup button1
  let redButton;
  redButton = createButton('Red');
  redButton.size(100, 50);
  redButton.position(10,10);
  redButton.style('background:red');
  redButton.mousePressed(changeRed);
  
  //setup button2
  let blueButton;
  blueButton = createButton('Blue');
  blueButton.size(100, 50);
  blueButton.position(10,70);
  blueButton.style('background:blue');
  blueButton.mousePressed(changeBlue);
  
  //setup eraser
  let eraseButton;
  eraseButton = createButton('Erase');
  eraseButton.size(100, 50);
  eraseButton.position(10,130);
  eraseButton.style('background:white');
  eraseButton.mousePressed(changeClear);
  
  //setup reset
  let clearButton;
  clearButton = createButton('Clear');
  clearButton.size(100, 50);
  clearButton.position(10,190);
  clearButton.style('background:yellow');
  clearButton.mousePressed(reset);
  
  // setup brushGrow
  let growButton;
  growButton = createButton('Grow');
  growButton.size(100, 50);
  growButton.position(10, 250);
  growButton.style('background:green');
  growButton.mousePressed(grow);
  
  // setup brushReduce
  let shrinkButton;
  growButton = createButton('Reduce');
  growButton.size(100, 50);
  growButton.position(10, 310);
  growButton.style('background:magenta');
  growButton.mousePressed(shrink);
}

function changeRed() {
  fill('Red');
}

function changeBlue() {
  fill('Blue');
}

function changeClear() {
  fill('White');
}

function reset() {
  background(255);
  size = 30;
}

function grow() {
  size += 5;
}

function shrink() {
  size -= 5;
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
  ellipse(mouseX, mouseY, size, size);
  }
}