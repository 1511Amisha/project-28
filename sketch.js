
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var mango,mango2,mongo3,mango4,mango5;
var tree;

function setup() {
	createCanvas(900,750);
	background(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(250,200,10,10);
	mango=new Mango(200,100,20);
	mango2=new Mango(250,150,20);
	mango3=new Mango(300,150,20);
	mango4=new Mango(350,150,20);
	mango5=new Mango(400,150,20);
	tree=new Tree(900,200,200,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  stone.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
}



