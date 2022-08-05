const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	left = new Ground(500,600,15,100);
	right = new Ground(680,600,15,100);


	//Create the Bodies Here.
	fill("white")
    ball = Bodies.circle(100,200,20,ball_options);
    World.add(world,ball);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  
  ground.display();
  left.display();
  right.display();

  

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:35,y:-45});
	}
}
