var fixedRect, movingRect;
var gameObject1;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(700,200,50,50);
  gameObject1 = createSprite(800,200,50,50);
 

 fixedRect.velocityX=3;
 movingRect.velocityX=-3;
 gameObject1.velocityX=-3;

}



function draw() {
  background(0);  

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";

  bounceOff(fixedRect, gameObject1);

// movingRect.x=World.mouseX;
// movingRect.y=World.mouseY;

// if (isTouching(movingRect, gameObject1)){

// movingRect.shapeColor="orange";
// gameObject1.shapeColor="orange";

// }

// if (isTouching(movingRect, fixedRect)){
  
//   movingRect.shapeColor="red";
//   fixedRect.shapeColor="red";
  
//   }


  drawSprites();
}