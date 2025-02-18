let img;

// Load the image.
function preload() {
  img = loadImage('/numbat.jpg');
  font = loadFont('Dristan Story.otf')
}

function setup() {
  createCanvas(640, 426.5);

  background(50);

  // Draw the image.
  image(img, 0, 0, 640, 426.5);

  // Label the image
  textFont(font)
  textSize(50)
  text('Numbat!', 50, 250)
  describe('An image of a numbat, an endangered marsupial native to Southern Australia.');
}