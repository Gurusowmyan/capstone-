 var fireboy , watergirl;
 var backgroundImg , backgroundImage , Background;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score =0;

function preload() {
 //backgroundImg = loadImage("bg2.jpg");
 //backgroundImage = loadImage("bg3.jpeg");
 //Background = loadImage("bg4.jpg");
}

function setup() {
  createCanvas(1200,400);
  fireboy = new Fireboy(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}
//255,255,255;

