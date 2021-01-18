const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  bg=loadImage("images/GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(100,500,2000,20)
    
    

    hero = new Hero(500,150,220,220)

    fly = new Fly(hero.body,{x:300,y:90})

    block1 = new Block(650,465,50,50)
    block2 = new Block(650,415,50,50)
    block3 = new Block(650,365,50,50)
    block4 = new Block(650,315,50,50)
    block5 = new Block(650,265,50,50)
    block6 = new Block(650,215,50,50)

    block7 = new Block(700,465,50,50)
    block8 = new Block(700,415,50,50)
    block9 = new Block(700,365,50,50)
    block10 = new Block(700,265,50,50)
    block11 = new Block(700,315,50,50)

    block12 = new Block(750,465,50,50)
    block13 = new Block(750,415,50,50)
    block14= new Block(750,365,50,50)
    block15 = new Block(750,315,50,50)

    block16 = new Block(800,465,50,50)
    block17= new Block(800,415,50,50)
    block18 = new Block(800,365,50,50)
    
    monster = new Monster(1290,270,30,30)


}

function draw(){
    background(bg);
    Engine.update(engine);
    
    text(mouseX+','+mouseY,1500,100)


    ground.display();
    

    hero.display()

    fly.display()

    fill("green")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()

    fill("pink")
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()

    fill("blue")
    block12.display()
    block13.display()
    block14.display()
    block15.display()

    fill("yellow")
    block16.display()
    block17.display()
    block18.display()

    monster.display()

    
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}