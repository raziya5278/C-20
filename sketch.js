var fixedRect, movingRect;
var wall, car;

function setup(){
    createCanvas(1000,1000);

    fixedRect = createSprite(200,300,50,75);
    fixedRect.shapeColor = "green";
    movingRect = createSprite(100,200,75,50);
    movingRect.shapeColor = "green";
    wall = createSprite(975,100,30,150);
    wall.shapeColor = "purple";
    wall.velocityX = -7;
    car = createSprite(200,100,75,50);
    car.shapeColor = "orange";
    car.velocityX = 7;
}

function draw(){
    background(0);

    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
       fixedRect.shapeColor = "red";
       movingRect.shapeColor = "red"; 
        }
     else{
         fixedRect.shapeColor = "green";
         movingRect.shapeColor = "green";
     }
       if (car.x - wall.x < wall.width/2 + car.width/2 && wall.x - car.x < wall.width/2 + car.width/2 ){
          car.velocityX = (-1)*car.velocityX;
          wall.velocityX = (-1)*wall.velocityX;
       }
       if  (wall.y - car.y < wall.height/2 + car.height/2 && car.y - wall.y < wall.height/2 + car.height/2){
        car.velocityY = (-1)*car.velocityY;
        wall.velocityY = (-1)*wall.velocityY; 
       }
    
       
     drawSprites();
}