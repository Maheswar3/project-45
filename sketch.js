
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background,backgroundImg 
function preload()
{
backgroundImg = loadImage ("")	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bunny=new bunny(600,200);


	Engine.run(engine);
  
}


function draw() {
	background (background);
  rectMode(CENTER);
  background(0);
  bunny.display ();
  drawSprites();
 
}



