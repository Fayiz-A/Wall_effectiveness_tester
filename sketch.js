var bullet, wall;

var bulletSpeed, bulletWeight;

var damage;

var retestButton;

var wallThickness;

function setup() {
  createCanvas(1600, 400);//creates the canvas

  bulletSpeed = random(223, 321);//the velocity of the bullet
  bulletWeight = random(30 , 50);//the weight of the bullet
  wallThickness = random(22, 83);//the thickness of the wall

  //creates the wall sprite
  wall = createSprite(1200, 200, wallThickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  //creates the bullet sprite
  bullet = createSprite(50, 200, 35, 8);
  bullet.shapeColor = "white";
  bullet.velocityX = bulletSpeed / 4;
  //the velocity is divided by four as the actual velocity was so much that the collision couldn't be detected

  //creates the retest button
  retestButton = new Clickable();
  retestButton.x = 750;
  retestButton.y = 200;
  retestButton.width = 150;
  retestButton.color = "green";
  retestButton.text = "TEST ANOTHER WALL";
  retestButton.textColor = "white";
}

function draw() {
  background(0,0,0);//clears the background

  testCollision(bullet, wall);//tests the collision

  drawSprites();//draws the sprites
}


