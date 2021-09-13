
var runner1,runner_running,runner2,path,coinImg;
var ground,invisibleGround,groundImage,coinImg;


function preload(){
  //pre-load images
  runner_running=loadAnimation("Runner-1.png","Runner-2.png");
  groundImage = loadImage("path.png");
  coinImg=loadImage("coin.png");
  
  
}

function setup(){
  createCanvas(600,400);
  //create sprites here
 
 ground = createSprite(200, 200);
 ground.addAnimation("path", groundImage);
 ground.scale = 0.9;
 ground.velocityY = 8;
 ground.tint = 'yellow';

 runner1=createSprite(200,200);
 runner1.addAnimation("runner",runner_running);
 runner1.scale=0.1;
 

}



function draw() {
  background("Skyblue");
  ground.velocityY = 8;
  if(ground.y>400){
    ground.y=height/2
  }

  runner1.x=World.mouseX;

  drawSprites()
}
