
var bunny;

function preload(){
  
}

function setup(){
  createCanvas(800,600);
  
  bunny = createSprite(100, 200, 50,50 )
}

function draw(){
  background(0);
  
    
    if(keyDown("right_arrow")){
      bunny.x = bunny.x + 3;
    }
    
  

    
    
    
    drawSprites();

  
 

}



