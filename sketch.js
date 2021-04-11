
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roofs,rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 60 * 2;
function preload()
{
	
}

function setup() 
{
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(300,500,60);
	bob2 = new bob(400,500,60);
	bob3 = new bob(500,500,60);
	bob4 = new bob(600,500,60);
	bob5 = new bob(700,500,60);
	roofs = new roof(500,100,600,50);
	rope1 = new rope(bob1.body,roofs.body,-bobDiameter *2,0);
	rope2 = new rope(bob2.body,roofs.body,-bobDiameter *2,0);
	rope3 = new rope(bob3.body,roofs.body,-bobDiameter *2,0);
	rope4 = new rope(bob4.body,roofs.body,-bobDiameter *2,0);
	rope5= new rope(bob5.body,roofs.body,-bobDiameter *2,0);
	Engine.run(engine);
  
}


function draw() {

  background('white');
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofs.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



