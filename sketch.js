var dog,happyDog,database,foodS,foodStock

function preload()
{
  this.image = loadImage("images/dogImg.png");
  this.image = loadImage("images/dogImg1.png");
  
  
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,50,50);
  this.dog=addImage(this.image)
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  

  drawSprites();
if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog.addImage(dogHappy)
}

}



