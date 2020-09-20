var monkey,monkeyImg,monkey_collided;

var obstacleImg1;

var bananaImg;

var jungle,jungleImg;

var backgroundImg,background1;
 

var invisibleGround;

var bananaGroup,obstacleGroup

var score = 0

var PLAY = 1
var END = 0
var gamestate = PLAY

function preload()
{

  monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  obstacleImg = loadImage("stone.png")
  
  backgroundImg=loadImage("jungle.jpg");
  
  bananaImg = loadImage("banana.png");
  
  monkey_collided = loadImage("Monkey_05.png")
  
  
}
function setup() {
  createCanvas(400, 400);
  
  
    background1 = createSprite(200,200,400,400)
  background1.addImage(backgroundImg);
 
  
  
  monkey = createSprite(45,390,20,20);
    monkey.addAnimation("running",monkeyImg);
  monkey.addImage(monkey_collided)
    monkey.scale = 0.2
   
  invisibleGround = createSprite(200,400,400,10);
  
  invisibleGround.visible=false;
  
  
 bananaGroup = new Group();
  obstacleGroup = new Group();

  
}

function draw() {
  background(220);
  console.log(monkey.y);
  
  
  
  monkey.collide(invisibleGround);
  
  
  console.log(gamestate)
    if(gamestate === PLAY)
     {       if(keyDown("space")&& monkey.y >=334)
        {
          monkey.velocityY = -15
           
       }
      spawnRocks();
  spawnBanana();
      scoreSwith();
     monkey.velocityY = monkey.velocityY +0.5
      
    if(monkey.isTouching(bananaGroup))
      {
      bananaGroup.destroyEach()
        score=score+1
      }
      if(monkey.isTouching(obstacleGroup))
      {
      gamestate = END
        monkey.changeImage(monkey_collided);
      }
    

}
    else if (gamestate===END)
  {
  obstacleGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    
    
    
  }   
    
   
  
 
 
  drawSprites();
 textSize(20)
  stroke("black")
  textFont("Georgia")
  fill("white")
  text("Score :"+ score,10,20);
 
}  
function spawnRocks()
{
if(frameCount %120 === 0)
{
 var obstacle = createSprite(200,380,100,100);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2
  obstacle.velocityX = -3
  obstacle.x=400
  obstacle.lifetime=134
  obstacleGroup.add(obstacle);
  obstacle.debug=true
  obstacle.setCollider("circle",0,0,100);
  
}
}
 function spawnBanana()
  { 
  if(frameCount %80 ===0 )
    {
  var banana = createSprite(400,250,10,10)
  banana.addImage(bananaImg)
    banana.scale = 0.1
    banana.velocityX = -3
    banana.lifetime=134
    bananaGroup.add(banana);
    var rand = random(110,250)
   //banana.y=rand
    banana.debug=true
    banana.setCollider("circle",0,0,200 );
    }
  }

 function scoreSwith()
{
 switch(score)
 {
   case 10:monkey.scale = 0.3
         break;
    case 20:monkey.scale = 0.4
         break;
  case 30 :monkey.scale = 0.5
         break;
  case 40:monkey.scale = 0.6
         break;
   default:break;
    
 
 }
}
  