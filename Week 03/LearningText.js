function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(135, 243, 255);
  textStyle(BOLDITALIC)
  // textSize(32) - This also works to define text size.
  textFont('Courier New', 32) //Text size is also a subset of textFont()
  text('Harrisburg University', 50, 50)
  
  textFont('Courier New', 14)
  text('I am very passionate about game design.', 100, 100) 
  text('When my parents found out about HU and its reputation, they suggested it to me.', 100, 125)
  text('I feel more at home here than any school I have ever been to before, I could not be happier!', 100, 150)
}