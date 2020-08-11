var banana_Img, obstacle_Img, obstaclesGrp, bckgrd, score, player_running

function preload(){
bckgrd=loadImage("Images/jungle.png")
player_running=
loadImage("Image/Monkey_01.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}