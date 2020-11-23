
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper(100,650,20)
ground=new Ground(600,680,1200,20);
boxbody1= Bodies.rectangle(450,600,20,100,{isStatic:true});
	boxbody2= Bodies.rectangle(350,650,200,60,{isStatic:true});
	boxbody3= Bodies.rectangle(250,600,20,100,{isStatic:true});
  World.add(world, boxbody1);
  World.add(world, boxbody2);
  World.add(world, boxbody3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  rectMode(CENTER);
  rect (boxbody1.position.x,boxbody1.position.y,20,100);
  rect (boxbody2.position.x,boxbody2.position.y,200,60);
  rect (boxbody3.position.x,boxbody3.position.y,20,100);
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}



