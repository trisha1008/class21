var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(200, 400,80,30);
  box1.shapeColor = "green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  box1.x=mouseX
  box1.y=mouseY
  bounceOff(movingRect,fixedRect) 

  if(isTouching(box1,movingRect)){
    movingRect.shapeColor="yellow"
    box1.shapeColor="yellow"
  }
else{
  movingRect.shapeColor="green"
    box1.shapeColor="green"

}
  

  
  drawSprites();
}







