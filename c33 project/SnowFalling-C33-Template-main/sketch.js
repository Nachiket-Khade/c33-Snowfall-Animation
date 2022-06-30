const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg, snowflake,rand;
var snow=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow1.jpg");
}

function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
}

function draw() {
Engine.update(engine);
background(bg); 
rand = Math.round(random(1,4));

if(frameCount%5===0) {
    snow.push(new Snow(random(0, 800), 30, 30))
    
  }
  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }

drawSprites();
}   