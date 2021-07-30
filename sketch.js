var seaImg, sea;
var shipImg1, ship;

function preload(){
// loading sea image   
seaImg = loadImage("sea.png");
// loading ship animation
shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(600,600);
// creating sea sprite
  sea = createSprite(200,200,100,100);
sea.addAnimation("sea", seaImg);
sea.scale = 0.5;
// creating ship sprite
ship = createSprite(200,250,20,20);
ship.addAnimation("ship",shipImg1);
ship.scale = 0.2;


}

function draw() {
  background("blue");
 
sea.velocityX = -3;
if(sea.x < 0){
  sea.x = sea.width /4;
}


  drawSprites();
}