var fairy,fairyimg;
var bgImg;
var star,starimg;

const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
var engine,world;
var star1;
var music;

function preload()
{
   //preload the images here
  starimg= loadImage("images/star.png");
  bgImg= loadImage("images/starnight.png");
  fairyimg= loadImage("images/fairy1.png");
  music= loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	music.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyimg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starimg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	star1 = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star1);

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW)
  {
  fairy.x = fairy.x + 20;
	}
	
  if(keyCode === LEFT_ARROW)
  {
  fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) 
  {
	 Matter.Body.setStatic(star1,false); 
  }
}

function draw() {
  background(bgImg);

  Engine.update(engine);  

  star.x= star1.position.x 
  star.y= star1.position.y 

  console.log(star.y);

  if(star.y > 470 && star1.position.y > 470 ){
  	Matter.Body.setStatic(star1,true);
  }

  drawSprites();

}