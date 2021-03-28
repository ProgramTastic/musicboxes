var canvas;
var music;
var rect1, rect2, rect3, rect4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
    rect1 = createSprite(100,580,175,30);
    rect1.shapeColor = "blue";
    rect2 = createSprite(300,580,175,30);
    rect2.shapeColor = "red";
    rect3 = createSprite(500,580,175,30);
    rect3.shapeColor = "orange";
    rect4 = createSprite(700,580,175,30);
    rect4.shapeColor = "pink";

    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
    box.velocityX = 4;
    box.velocityY = 9;

    music.play();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(box)&&box.bounceOff(rect1)){
        box.shapeColor = "blue";
    }
    if(rect2.isTouching(box)&&box.bounceOff(rect2)){
        box.shapeColor = "red";
    }
    if(rect3.isTouching(box)&&box.bounceOff(rect3)){
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(rect4.isTouching(box)&&box.bounceOff(rect4)){
        box.shapeColor = "pink";
    }

    drawSprites();
}
