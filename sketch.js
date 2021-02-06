const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
var crane;
var bg;
function preload(){
    crane=loadImage("c.png");
    bg=loadImage("bg.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight-130);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(700,displayHeight-140,displayWidth+50,20);

    ball=new Ball(500,500);

    sling=new Slingshot(ball.body,{x:670,y:350});

    box1=new Box(900,100);
    box2=new Box(900,100);
    box3=new Box(900,100);
    box4=new Box(900,100);
    box5=new Box(900,100);
    box6=new Box(900,100);
    box7=new Box(900,100);

    box8=new Box(970,100);
    box9=new Box(970,100);
    box10=new Box(970,100);
    box11=new Box(970,100);
    box12=new Box(970,100);
    box13=new Box(970,100);
    box14=new Box(970,100);

    box15=new Box(1040,100);
    box16=new Box(1040,100);
    box17=new Box(1040,100);
    box18=new Box(1040,100);
    box19=new Box(1040,100);
    box20=new Box(1040,100);
    box21=new Box(1040,100);
}
function draw(){
    background(bg);
    image(crane,90,60,600,700);
    Engine.update(engine);

    ground.display();

    ball.display();

    sling.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //second
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    //third
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
