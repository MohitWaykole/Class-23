const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(200, 390, 400, 10);

  ball = new Box(200, 260, 50 ,60);

  ball2 = new Box(230, 150, 70, 50);
 
}

function draw(){
  background(200);

  Engine.update(engine);

  ground.display();

  ball.display();

  ball2.display();

}