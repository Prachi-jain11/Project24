
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground, paperObject;
var rect1,rect2,rect3;
var world;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	Ground = new ground(350,height,1000,20);
	paperObject = new paper(200,580,20);

	rect1 = createSprite(560,540,20,100);
	rect1.shapeColor = "red";

	rect2 = createSprite(630,580,150,20);
	rect2.shapeColor = "red";

	rect3 = createSprite(700,540,20,100);
	rect3.shapeColor = "red";

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.setStatic(paperObject,false);
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:5,y:-10});
	}
}



