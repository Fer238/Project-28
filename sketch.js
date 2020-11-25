var tree1,mango1,ground,boy,stone;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyImg = loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1=new Tree(600,450,400,500);
  mango1=new Mango(500,400,30,30);
  mango2=new Mango(550,410,30,30);
  mango3=new Mango(525,350,30,30);
  mango4=new Mango(580,300,30,30);
  mango5=new Mango(590,360,30,30);
  mango6=new Mango(630,250,30,30);
  mango7=new Mango(700,350,30,30);
  mango8=new Mango(750,400,30,30);
  mango9=new Mango(650,400,30,30);
  mango10=new Mango(650,300,30,30);
  ground = new Ground(600,height,1200,20);
  
 
  //boy=new Boy(150,400,50,50);
  boy=createSprite(150,620,50,50);
  boy.addAnimation("boy.png",boyImg);
  boy.scale=0.1;
  
  stone = new Stone(100,570,50,50);
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  ground.display();
  stone.display();
 // boy.display();
  
  drawSprites();
  
 
}



