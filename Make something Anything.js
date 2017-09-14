var img;
var teapot;

function setup() { 
//the double hashes mean a comment - ignored by the computer
createCanvas(300, 300, WEBGL);
  img = createImg('https://previews.123rf.com/images/cienpies/cienpies1308/cienpies130800780/21509487-Vintage-hipsters-lightning-bolts-seamless-pattern-background--Stock-Vector.jpg');
  background(100);
	createCanvas(1500, 1500); 
background(80, 100, 85);
	//Below is for the 3d moving cirlce
  teapot = loadModel('assets/teapot.obj');
	//Below is the background for the Square 3d object
	createCanvas(1500, 1500, WEBGL);
//this is the size of the canvas pixel count 
//in horizontal vertical directions that allow you to draw
// try changing the 1500s and see what happens
}

function draw() {
 if (mouseIsPressed){ 
//an if statement that says if the mouse is pressed it will fill grey
   fill(225, 200, 35); // try changing one of these to any number between 0 and 255
 }else {  
// otherwise if the mouse isn't pressed it will fill purple (my favorite)  
   fill(8, 54, 80);
// you can set the color you want (R, G, B) http://www.rapidtables.com/web/color/RGB_Color.htm
 }
	//Below is what mkaes the circle move
	background(0, 0, 200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(teapot);
 ellipse(mouseX, mouseY, 60, 100);
	//Below is for the moving square
	 camera(0, 0, sin(frameCount * 0.01) * 100);
 plane(120, 120);
//This makes an ellipse (wherever your mouse is horizontal, vertical, 20 pixels tall, 100 pixels wide)
//try changing the 80s and see what happens
}

