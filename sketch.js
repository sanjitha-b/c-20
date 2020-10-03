var fixed_rect, moving_rect;

function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(300, 200, 80, 50);
  fixed_rect.shapeColor = 'black'

 moving_rect = createSprite(600, 200, 40, 90);
 moving_rect.shapeColor = 'black'

}

function draw() {
  background('purple');  


  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;



  if(moving_rect.x - fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2
    && fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2){
    fixed_rect.shapeColor = 'pink'
    moving_rect.shapeColor = 'pink'
   
  }
  else {
    fixed_rect.shapeColor = 'black'
    moving_rect.shapeColor = 'black'

  }
  drawSprites();
}