var engine, world;
var speed, weight;
var bullet, wall, thickness;


function setup() {
    createCanvas(windowWidth, windowHeight);
    thickness = random(22, 83);
    speed = random(223, 321);
    weight = random(30, 52);
    bullet = createSprite(windowWidth/4, windowHeight/2, 20, 5);
    wall = createSprite(windowWidth / 1.2, windowHeight / 2, thickness, windowHeight / 2);
    bullet.velocityX = speed/10;
    wall.shapeColor = color(64, 36, 59);
  
}

function draw() {
    background(216, 201, 155);  
    fill(0);
    textSize(25);
    strokeWeight(50);
    text("Note! The bullet has been slowed down so that it can be easier to see.", windowWidth / 5, windowHeight / 4);
   
    if (bullet.isTouching(wall)) {
        bullet.velocityX = 0;
       
        var deform = 0.5 * speed * weight * speed / (thickness*thickness*thickness);
        if (deform > 10) {
            wall.shapeColor = color(99, 29, 7);
            textSize(30);
            fill(0);
            text("This wall is Dangerous!", windowWidth / 2, windowHeight / 2);
        }
        
        if (deform < 10) {
           wall.shapeColor = color(0, 199, 3);
            textSize(30);
            fill(0);
            text("This wall is very Safe!", windowWidth / 2, windowHeight / 2);
        }
       
    }
    text("Thickness of Wall = " + thickness + "cm", windowWidth / 2.2, windowHeight / 1.2);
    drawSprites();
}