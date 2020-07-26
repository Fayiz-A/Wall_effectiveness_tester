function testCollision(testObject, collisionDetector){

    if(collisionDetector.x - testObject.x < collisionDetector.width/2 + testObject.width/2) {
      //codition for checking the collision
      testObject.velocityX = 0;//stops the object
      
      damage = ((0.5 * bulletWeight * bulletSpeed * bulletSpeed) / (wallThickness * wallThickness * wallThickness)); // calculates the damage
  
      if(damage < 10) {
        displayText("Wall is effective", color(0, 255, 0), 300, 30);
        collisionDetector.shapeColor = color(0, 255, 0);
      } 
      
      else {
        displayText("Wall is NOT effective", "red", 300, 30);
        collisionDetector.shapeColor = "red";
      }

      displayText("Damage: " + Math.round(damage), "yellow", 600, 30);//displays the amount of damage done to the wall

      retestButton.draw();//draws the retest button
      
      retestButton.onPress = function() {
        //resets everything back when the retest button is pressed
        testObject.x = 50;
        collisionDetector.shapeColor = color(80, 80, 80);
    
        bulletSpeed = random(223, 321);
        bulletWeight = random(30 , 52);
        wallThickness = random(22, 83);
        
        wall.width = wallThickness;
        testObject.velocityX = bulletSpeed / 4;
      }

    }
  }
  