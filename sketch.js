
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bolaObj;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	bolaObj=new Paper(100,100,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  bolaObj.display();
  groundObject.display();
  dustbinObj.display();
 
  cima();
}

// function cima(){
// 	if(keyDown('w')) {
// 		Matter.Body.applyForce(bolaObj.body,bolaObj.body.position,
// 							{x:130,y:-145});

// 	}



// }


function cima(){

	if (keyDown('w') ){
		Matter.Body.applyForce(bolaObj.body,bolaObj.body.position,
								{x:30,y:-40});
	}
	
	
	}