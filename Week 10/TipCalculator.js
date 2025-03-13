var bill;
var tipAmt = 0.00;

function setup()
{
  createCanvas(400, 400);
  background(220);

  bill = createInput("Enter your bill ammount");
  bill.position(25,100);
  bill.size(150,50);

  perc = createInput("Enter your tip ammount");
  perc.position(200,100);
  perc.size(150,50);
  
  button = createButton('Calculate');
  button.position(0, 380);
  button.size(75,20);
  button.mousePressed(function(){tipCalc()});
  
  resetButton = createButton('Clear');
  resetButton.position(350, 380);
  resetButton.size(50,20);
  resetButton.mousePressed(function(){setup()})
}

function tipCalc()
{
  tipAmt = bill.value() * perc.value() * .01;
  text("You should tip: $"+tipAmt, 150, 200)
}