//Create variables here
var dogImg, dog2Img
//var Engine= Matter.Engine
//var World= Matter.World
//var Body= Matter.Body
var database
var foodStock;
function preload()
{
  dogImg= loadImage("Images/dogImg.png")
  dog2Img= loadImage("Images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
 database= firebase.database() 
// engine= Engine.create()
// world= engine.world
updateFood(40)
 dog= createSprite(250,250)
 dog.addImage(dogImg)
 dog.scale=0.5
}


function draw() { 
//Engine.update(engine)
getfood()
background(46, 139, 87);
if(keyDown(UP_ARROW) && foodStock>0){
  foodStock--
  updateFood(foodStock)
  dog.addImage(dog2Img)
}
textSize(17)
text("Food left is"+foodStock, 300, 70)
text("Press UP_ARROW to feed your dog", 100, 100)
  drawSprites();
  //add styles here

}
function getfood(){
  database.ref('Food').on("value",(data)=>{
foodStock= data.val()
  })
}
function updateFood(food){
database.ref('/').update({
  Food: food
})
}


