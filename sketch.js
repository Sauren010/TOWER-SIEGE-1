const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1280,575);

	engine = Engine.create();
	world = engine.world;

	log1 = new Ground(600,400,270,20);
  log2 = new Ground(1000,400,270,20);

  box1 = new Box(1005,365,40,40);
  box2 = new Box(965,365,40,40);
  box3 = new Box(1040,365,40,40);
  box4 = new Box(1080,365,40,40);
  box5 = new Box(922,365,40,40);
  box6 = new Box(943,315,40,40);
  box7 = new Box(983,315,40,40);
  box8 = new Box(1022,315,40,40);
  box9 = new Box(1062,315,40,40);
  box10 = new Box(963,264,40,40);
  box11 = new Box(1000,264,40,40);
  box12 = new Box(1040,264,40,40);
  box15 = new Box(605,365,40,40);
  box16 = new Box(565,365,40,40);
  box17 = new Box(645,365,40,40);
  box18 = new Box(685,365,40,40);
  box19 = new Box(525,365,40,40);
  box20 = new Box(545,315,40,40);
  box21 = new Box(585,315,40,40);
  box22 = new Box(625,315,40,40);
  box23 = new Box(665,315,40,40);
  box24 = new Box(645,264,40,40);
  box25 = new Box(567,264,40,40);
  box26 = new Box(610,264,40,40);
  box27 = new Box(608,224,40,40);
  
  box30 = new Box(1005,214,40,40);

  stone = new Stone(100,300,20);

  slingshot = new SlingShot(stone.body,{x:150, y:250});
	
	Engine.run(engine);
  
}


function draw() {
  background(56,44,44);
  log1.display();
  log2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
 box30.display();

  stone.display();

  slingshot.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}