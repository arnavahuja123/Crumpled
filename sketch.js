const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;
var world,engine;
function preload()
{
	Image.upload;
}
function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,200, 20);
	ground1 = new Ground(800,680,1600,20);
	dustbin1 = new Dustbin(1200,595,50,150);
	dustbin2 = new Dustbin(1300,645,150,50);
	dustbin3 = new Dustbin(1400,595,50,150);
	Engine.run(engine);

}


function draw() {
  background(0);
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-95});
	}
}



