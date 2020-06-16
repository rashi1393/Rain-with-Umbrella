const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,400);
    umbrella = new Umbrella(200,200);

    for(var i=0; i<1000; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
}

function draw(){
    Engine.update(engine);
    background(0); 

    

    umbrella.display();
    for(var i = 0; i<1000; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
}   

