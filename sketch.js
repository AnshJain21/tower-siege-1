const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2,block1,block2,block3,chain;
var polygon_image, polygon

var chain

function preload() {
  


}


function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world;
    
 block1= new Box(360,275,30,40);
 block2= new Box(390,275,30,40);
 block3=new Box(420,275,30,40);
 block4= new Box(450,275,30,40);
 block5=new Box(480,275,30,40);
 block6=new Box(510,275,30,40);
 block7=new Box(540,275,30,40);
 //level two
 block8=new Box(390,235,30,40);
 block9=new Box(420,235,30,40);
 block10=new Box(450,235,30,40);
 block11=new Box(480,235,30,40);
 block12=new Box(510,235,30,40);
 //level three
block13=new Box(420,195,30,40);
block14=new Box(450,195,30,40);
block15=new Box(480,195,30,40);
//level four
block16=new Box(450,155,30,40);
//another stand
block17=new Box(740,155,30,40);
block18=new Box(770,155,30,40);
block19=new Box(800,155,30,40);
block20=new Box(830,155,30,40);
block21=new Box(860,155,30,40);
block22=new Box(770,115,30,40);
block23=new Box(800,115,30,40);
block24=new Box(830,115,30,40);
block25= new Box(800,75,30,40);
//ground
    ground1=new Ground(450,300,270,10);
    ground2=new Ground(800,195,210,10);
  //createSprite(400, 200, 50, 50);
 
  
  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon)

  slingshot=new SlingShot(this.polygon ,{x:150,y:200})

  Engine.run(engine);
}

function draw() {
  background("orange");  
  ground1.display();
  ground2.display();
  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  
  fill ("cyan");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
 
fill("lime");
  block13.display();
  block14.display();
  block15.display();
  block25.display();
fill("gray");
  block16.display();
  block22.display();
  block23.display();
  block24.display();
  slingshot.display();
 Engine.update(engine);



 
fill("gold")
imageMode(CENTER)
image(polygon_image,polygon.position.x,polygon.position.y,40,40)



  drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingshot.fly();
}





