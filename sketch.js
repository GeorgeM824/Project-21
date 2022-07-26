
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bottomGround;
var leftWall;
var rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

  var ball_options = {
    isStatic:false,
    restitution: 0.95,
  
 
  }


	bottomGround = new Ground(400,690,800,10);
  leftWall = new Ground(550,649,10,75);  
  rightWall = new Ground(665,649,10,75);

	Engine.run(engine);

  ball = Bodies.circle(200,200,10,ball_options);
  World.add(world,ball);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottomGround.display();
  leftWall.display();
  rightWall.display();
  ellipse(ball.position.x, ball.position.y, 50);
  Engine.update(engine);

  drawSprites();
 
}



function keyPressed()
  {
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.001, y: 0},);
    }
    
  }

  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.001, y: 0},);
    }
    
  }
