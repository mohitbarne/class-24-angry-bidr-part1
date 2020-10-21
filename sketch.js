const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 ,box2 ,ground ,bird ,pig1 ,pig2 ,log1


function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);

    ground = new Ground(width/2,height-20,width,20)
    
    bird = new Bird(100,100)
    pig1 = new Pig(810,400)
    log1 = new Log(810,260,300,PI/2)
    box3 = new Box(700,220,50,50)
    box4 = new Box(920,220,50,50)
    pig2 = new Pig(810,200)
    log2 = new Log(810,160,300,PI/2)
    
    box5 = new Box(810,100,50,50)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(860,120,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();

    bird.display()
    pig1.display()
    log1.display()
    box2.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    box5.display(
    log3.display(
    log4.display()    
    )    
    )    
    



}