function preload(){
angel_with_wingsimg=loadImage("angel with wings.png")
angelimg=loadImage("angel.png")
enemy1img=loadImage("enemy.png")
demonimg=loadImage("demon.png")
enemy2img=loadImage("enemy2.png")
sb=loadImage("start.png")
sky=loadImage("sky.png")
}

function setup() {
  
  createCanvas(1000,800);
  angel_with_wings= createSprite(700,400)
  angel_with_wings.addImage(angel_with_wingsimg)
  angel_with_wings.scale=0.5

  start=createSprite(700,100)
  start.addImage(sb)
  start.scale=0.5
 
  sk= createSprite(500,200)
    sk.addImage(sky)
    sk.scale=1.5
 sk.visible= false
   

 
}

function draw() {
  background(255,255,255); 
  //textSize(20) 
  //fill("red")
 //text("there was an Angel named El who lived in a town named slytherin in Heaven.", 50,200)


  //text("but one day, sudedenly the Devil cuts off her wings and took it to Hell", 50,250)


  //text("The angel can't survive without her wings, please help the angel to reach hell and find her wings.", 50,300)
  
  if(mousePressedOver(start)){
    sk.visible= true
  
   angel_with_wings.visible=false
   sb.visible=false
   
  }



  drawSprites();

}
