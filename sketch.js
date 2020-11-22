var dog, dogImage, happyDog, foodS, foodStock, database;

function preload()
{
    dogImage = this.loadImage('Dog.png');
    happyDog = this.loadImage('happydog.png');
}

function setup() {
    createCanvas(500, 500);
    dog = createSprite(250, 250);
    database = firebase.database();
    foodStock = database.ref('food');
    foodStock.on('value', readStock)
}


function draw() {  
    background(46, 139, 87);
    if(keyCode === 24){
        writeStock(foodS);
        dog.addImage(happyDog);
    }
    drawSprites();
    textSize(18);
    fill(0);
    stroke(255);
    strokeWeight(1);
    text("Food Remaining: " + foodStock, 250, 200);
    text("Press Up Arrow to feed.", 250, 50);
    drawSprites();
}

function readStock(data){
    foodS = data.val();
}

function writeStock(x){

    if(x<=0){
        x=0;
    }
    else{
        x = x-1;
    }

    database.ref('/').update({
        food:x
    })
}