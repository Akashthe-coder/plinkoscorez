const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles= [];
var plinkos= [];
var divisions= [];
var divisionHeight= 200;

function setup() {
  createCanvas(800,1000);
  Engine.run(engine); 
}

function draw() {
  background(0,0,0);
  
  
  drawSprites();
}