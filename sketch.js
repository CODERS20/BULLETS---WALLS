var wall;
var bullet;
var damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(400, 200, 60, 30);
  bullet.velocityX = Math.round(random(223,321));
  bullet.shapeColor = "white";
  bullet.density = Math.round(random(30,52));
  
  wall = createSprite(1500,200,60,400);
  wall.shapeColor = (80,80,80)
  wall.width = Math.round(random(22,83));
  
  console.log(bullet.density);
  console.log(bullet.velocityX);
  console.log(wall.width);
  
  damage  = Math.round(0.5*bullet.density*bullet.velocityX*bullet.velocityX/(wall.width*wall.width*wall.width));
}

function draw() {
  background("blue");
  
  if(bullet.collide(wall)){
    bullet.velocityY = 0;
  }
  textSize(100);
  fill("pink");
  text(damage,200,200);

  if(damage>10){
    wall.shapeColor = "red"
  }
  else if(damage<10){
    wall.shapeColor = "green";
  }


  drawSprites();
}