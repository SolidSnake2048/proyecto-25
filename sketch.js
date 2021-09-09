
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paperBallObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paperBallObject=new PaperBall(100,100,35);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  keyPressed();
 
  groundObject.display();
  dustbinObj.display();

  paperBallObject.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBallObject.body,paperBallObject.body.position,{x:4,y:-10});
	}
}

