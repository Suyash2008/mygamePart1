
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var player;
var ghost;
var bg;
var bgS;
var coinIm;
var Coins
var score = 0;
var basketball;
var ground;
var gamestate = "playgame1"
var ball;
var engine,world


function preload(){
bg = loadImage("track.jpg")
coinIm = loadImage("coin.png")
//basketball = loadImage("basketball.png")
}

function setup() {
  
  createCanvas(1200, 700);
  bgS = createSprite(400,-3500,800,2800)
  bgS.addImage(bg)
  player = createSprite(250,600);
  ghost = createSprite(500,600);

  engine = Engine.create();
  world = engine.world;
  

  /*/ground = Bodies.rectangle(600,690,1200,5,{isStatic : true})
  World.add(world,ground)

  ball = Bodies.circle(100,600,25,{restitution : 0.04,density:1.0,friction:1.0})
  World.add(world,ball)*/
  
  Coins = new Group()
  ghost.velocityY = -8

  ground = new Ground(600,690,1200,5)
  ball = new Paper(100,600,25)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  camera.position.x = 400
  camera.position.y = player.y
  if(gamestate==="playgame1"){
  if(keyDown("up")){
    player.y = player.y -10
  }
  if(keyDown("right")){
    player.x = player.x +10
  }
  if(keyDown("left")){
    player.x = player.x -10
  }

  

  spawnPowerups()
  if(Coins.isTouching(player)){
    Coins.destroyEach()
    score = score + 1
    ghost.velocityY = ghost.velocityY + 1
  }
if(ghost.y === -7330){
  gamestate = "end"
}else
if(player.y === -7330){
  gamestate = "stage2"
}
}
if(gamestate === "stage2"){
  console.log(ball)
  player.destroy()
  ghost.destroy()
  bgS.destroy()
  background("lightblue")
  
  score = 0
  /*/rectMode(CENTER)
  ellipseMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,5)
  imageMode(CENTER)
  image(basketball,ball.position.x,ball.position.y,50,50)*/
  ground.display()
  ball.display()

}
  

  
  

  drawSprites();
 console.log(gamestate)
textSize(20)
stroke("blue")
text("Score " + score,player.x,player.y-100)
}



function spawnPowerups(){
  if(frameCount % 120 === 0){
    powerup = createSprite(random(80,350),player.y - 500)
    powerup.velocityY = 7
    powerup.lifetime = 200
    powerup.addImage(coinIm)
    powerup.scale = 0.3
    Coins.add(powerup)
  }
}



function keyPressed() {
  if (keyCode == 32) {
      var a = document.getElementsByTagName("input")[0].value;
      var b = document.getElementsByTagName("input")[1].value;
      Matter.Body.applyForce(ball.body, ball.body.position, { x: b, y: -a });
  }
}

