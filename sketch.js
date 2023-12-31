
// Declares the unviersal variables used throughout the program
let pageSel = "home";
let homePage = true;
let cursorX = 0;
let cursorY = 0;
let homeButton;
var tryAgainCC = 0;
let gainSlider;
let muteButton;
let muteState = false;
let muteStateN = 1;
var mainMusic;
//Main menu variables

// Activity One Variables
let act1Button;
let game1On = false;
var score = 0;
var whackValue;
var molePosX;
var molePosY;
var correctGuess = true;
var gameCompleted = false;
var TARGETSCORE = 10;
var clickCount = 0;

// Activity two variables
var rectPosX;
var rectPosY;
var trianglePosX;
var tranglePosY;
var randomImageTopVal;
var previousImageTopVal;
var randomImageBottomVal;
var previousImageBottomVal;


var act2TopWon = false; // checks if top picture is in place
var act2BotWon = false; // checks if bottom picture is in place
// Top Picture Case 1 Variabels 
var hayX = 200;
var hayY = 120;
var dHay; // Distance between the HayXY and cursorXY
let hayNX = 600;
let hayNY = 120;
let dNHay; // Distance between the HayXY and Negative HayXY
// Top Picture Case 2 Variables 
var farmX = 200;
var farmY = 120;
var dFarm; // Distance between the FarmXY and cursorXY
let farmNX = 600;
let farmNY = 120;
let dNFarm; // Distance between the FarmXY and Negative FarmXY
// Top Picture Case 3 Variables 
var horseX = 200;
var horseY = 120;
var dHorse; // Distance between the HorseXY and cursorXY
let horseNX = 600;
let horseNY = 120;
let dNHorse; // Distance between the HorseXY and Negative HorseXY
// Bottom Picture Case 1 Varibales
var pigX = 220;
var pigY = 325;
var dPig; // Distance between the PigXY and cursorXY
let pigNX = 620;
let pigNY = 325;
let dNPig; // Distance between the PigXY and Negative PigXY
// Bottom Picture Case 2 Varibales
var eggX = 220;
var eggY = 325;
var dEgg; // Distance between the EggXY and cursorXY
let eggNX = 620;
let eggNY = 325;
let dNEgg; // Distance between the EggXY and Negative EggXY
// Bottom Picture Case 3 Variables 
var milkX = 220;
var milkY = 325;
var dMilk; // Distance between the MilkXY and cursorXY
let milkNX = 620;
let milkNY = 325;
let dNMilk; // Distance between the MilkXY and Negative MilkXY  

// Activity Three Variables
var sqrX = 350;
var sqrY = 150;
var shapeSize = 300;
var randomShape;
var randomColorVal;
var randomColor;

var prevRandomShape = -1;
var circleD;
var circleRad = shapeSize / 2;
var tracing = false;
var sameShape = false;
var squareCheck1 = false;
var squareCheck2 = false;
var squareCheck3 = false;
var squareCheck4 = false;
var squareCheck5 = false;
var squareChecks = false;
var sameColor = false;



// The function preload contains all of our visual assets that need to be loaded before running the application
function preload() {
  mainMusic = loadSound("pop-corn.mp3");
  myFont = loadFont('HeehawRegular-PZy7.ttf');
  mainMenuImg = loadImage("farmmainmenu.jpg");
  activity1BG = loadImage("newfarmpic.png");
  // Activity 1 Pictures
  moleWHH = loadImage("mole2.png");
  smallMole = loadImage("mole2.png");
  coinSound = loadSound("coinSound.mp3");
  wrongAnswer = loadSound("wrongans.mp3");
  // Activity 2 Pictures
  hay = loadImage("hay.webp");
  pig = loadImage("pig.png");
  farm = loadImage("farm.png");
  horse = loadImage("horse.png");
  milkjug = loadImage("milkjug.png");
  egg = loadImage("egg.png");
  apple = loadImage('apple.png');


}
// The setup function creates and prints the entire home page
function setup() {

  textFont(myFont);
  pageSel = "home";
  createCanvas(1000, 500);

  // The code below creates the necessary buttons 
  homeButton = createButton("Go home");
  homeButton.position(999, 999);
  homeButton.mouseClicked(home);
  act1Button = createButton("Begin game");
  act1Button.position(999, 999);
  act1Button.mouseClicked(startWhackAMole);
  muteButton = createButton("mute all sounds"); //mute button
  muteButton.position(999, 999);
  muteButton.mousePressed(tog);
  gainSlider = createSlider(0, 2, 1, 0); //volume slider
  gainSlider.position(999, 999);
  gainSlider.addClass("mySlider");
  gainSlider.style('width', '240px');

  // Title text & Background
  background(mainMenuImg);
  textSize(40);
  textAlign(CENTER);
  fill(196, 164, 132, 250);
  rect(150, 35, 675, 90, 50);
  fill('black');
  text("Moo Moo's Farm Adventure", 490, 100);


  textSize(40);

  // Menu buttons
  fill(196, 164, 132, 250);
  rect(150, 250, 300, 100, 50);
  fill('black');
  textAlign(CENTER);
  text("Activity 1", 300, 315);


  fill(196, 164, 132, 250);
  rect(500, 250, 300, 100, 50)
  fill('black');
  textAlign(CENTER);
  text("Activity 2", 650, 315);

  fill(196, 164, 132, 250);
  rect(150, 375, 300, 100, 50)
  fill('black');
  textAlign(CENTER);
  text("Activity 3", 300, 440);

  fill(196, 164, 132, 250);
  rect(500, 375, 300, 100, 50)
  fill('black');
  textAlign(CENTER);
  text("Settings", 650, 440);

}


// The function below waits until the user selects one of the menu options
function mouseClicked() {

  // The following variables hold the X and Y coordinate of every user click.
  cursorY = mouseY;
  cursorX = mouseX;

  if (!mainMusic.isPlaying()) {
    musicPlay();
  }

  if (pageSel == "tryAgain" || pageSel == "tryAgain2" || pageSel == "tryAgain3") {
    tryAgainCC++;
  }

  // The following segment of code determines if activity 1 is active and if so determines if the user is clicking close enough to each mole. 
  // If so, it plays a coin noise, adds to the score, and calls whackAMole
  // If not, it plays an error noise.
  if (pageSel == "activity1" && game1On == true) {
    correctGuess = true;
    let d = dist(mouseX, mouseY, molePosX, molePosY);
    if (d <= 30) {
      coinSound.setVolume(0.05 * gainSlider.value() * muteStateN);
      coinSound.play();
      score++;
      WhackAMole();
    } else if (game1On == true) {
      clickCount++;
      if (clickCount >= 2) {
        wrongAnswer.setVolume(0.4 * gainSlider.value() * muteStateN);
        wrongAnswer.play();
      }

    }
  }






}




// The following function paints and operates the activity one page.
function activityOne() {
  createCanvas(1000, 500)


  background(activity1BG);


  homeButton.position(50, 50);
  textSize(80);

  fill(196, 164, 132, 250);
  rect(125, 25, 750, 100, 50);

  fill('black');
  strokeWeight(0);
  text("Whack-a-Mole", 500, 100);
  strokeWeight(1);
  textSize(35);
  fill(196, 164, 132, 250);
  rect(650, 210, 330, 175, 50);

  fill('black');
  strokeWeight(0);
  text("Get " + TARGETSCORE + " to Win!", 810, 275);
  textSize(30);
  text("Current score: " + score, 820, 350);
  strokeWeight(1);





  fill('green');


  fill("#6e4f32");

  circle(300, 250, 75);
  circle(450, 250, 75);
  circle(600, 250, 75);
  circle(300, 350, 75);
  circle(450, 350, 75);
  circle(600, 350, 75);
  circle(300, 450, 75);
  circle(450, 450, 75);
  circle(600, 450, 75);

  act1Button.position(900, 450);
  fill(196, 164, 132, 250);
  rect(100, 230, 100, 215, 60);
  fill('black')
  strokeWeight(0);
  text("Tap the mole to win!", (width / 7), 275, 10);
  strokeWeight(1);

}

// The purpose of this function is to activate the variable that represents activity 1's status.
// When called, flips the game 1 "On switch" and calls it for the first time.
function startWhackAMole() {
  if (game1On == false) {
    clickCount = 0;
    game1On = true;
    WhackAMole();
  }
}

// The whack a mole portion of activity one.
function WhackAMole() {

  // This while loop generates and moves the location of the mole.
  // In order for the mole to move, the game1On and correctGuess must be true.
  // Will generate moles under those conditions until score is met.
  while (game1On && correctGuess && score <= TARGETSCORE) {


    // Resets correctGuess so it holds position of mole.
    correctGuess = false;


    whackValue = random(1, 9);
    whackValue = round(whackValue);
    int(whackValue);



    // This switch case statement determines where the mole appears based on random number between 1-9 generated above.
    switch (whackValue) {
      case 1:
        activityOne();
        image(smallMole, 263, 215, 75, 75);
        molePosX = 300;
        molePosY = 250;
        break;
      case 2:
        activityOne();

        image(smallMole, 413, 215, 75, 75);
        molePosX = 450;
        molePosY = 250;
        break;
      case 3:
        activityOne();

        image(smallMole, 563, 215, 75, 75);
        molePosX = 600;
        molePosY = 250;
        break;
      case 4:
        activityOne();

        image(smallMole, 263, 315, 75, 75);
        molePosX = 300;
        molePosY = 350;
        break;
      case 5:
        activityOne();

        image(smallMole, 413, 315, 75, 75);
        molePosX = 450;
        molePosY = 350;
        break;
      case 6:
        activityOne();

        image(smallMole, 563, 315, 75, 75);
        molePosX = 600;
        molePosY = 350;
        break;
      case 7:
        activityOne();

        image(smallMole, 263, 415, 75, 75);
        molePosX = 300;
        molePosY = 450;
        break;
      case 8:
        activityOne();

        image(smallMole, 413, 415, 75, 75);
        molePosX = 450;
        molePosY = 450;
        break;
      case 9:
        activityOne();

        image(smallMole, 563, 415, 75, 75);
        molePosX = 600;
        molePosY = 450;
        break;
    }


  }
  // This condition is met when the determined score is reached
  // It prints congratulatory message and asks user to try again.
  if (score > TARGETSCORE - 1) {

    background(activity1BG);
    image(moleWHH, 800, 150);
    moleWHH.resize(300, 300);


    homeButton.position(50, 50);

    background(activity1BG);
    textSize(80);

    fill(196, 164, 132, 250);
    rect(125, 25, 750, 100, 50);
    fill('black');
    strokeWeight(0);
    text("Whack-a-Mole", 500, 100);
    fill(200, 0, 0);
    image(smallMole, 999, 999, 1, 1);
    strokeWeight(1);
    fill(196, 164, 132, 250);

    rect((width / 4), 215, (width / 2), 100, 50);
    fill('black');
    strokeWeight(0);
    text("YOU WIN!", 500, 300);
    textSize(70);

    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect((width / 4), 390, (width / 2), 100, 50);

    fill('black');
    strokeWeight(0);
    text("Try Again?", (width / 2), 475);


    act1Button.position(999, 999);
    game1On = false;
    score = 0;
    correctGuess = true;
    gameCompleted = true;
    pageSel = "tryAgain";
    clickCount = 0;
    tryAgainCC = 0;
  }
}








// The following function paints and operates the activity two page.
function activityTwo() {
  //Paints the GUI for Act2

  background(activity1BG);
  pageSel = "activity2";
  homeButton.position(50, 50);
  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(125, 25, 750, 100, 50);
  fill('black');
  textSize(75);
  strokeWeight(0);
  text("Drag and Match", 500, 100);
  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(100, 230, 100, 215, 60);
  textSize(20);
  fill('black')
  strokeWeight(0);
  text("Drag and match the shapes to win!", (width / 7), 275, 10);


  topImage();
  bottomImage();









}

// The following function displays a random image that appears on the top half of the screen for Activity 2.
function topImage() {


  // This part of the function determines a random integer that will dictate which picture will display. 
  randomImageTopVal = random(1, 3);
  randomImageTopVal = round(randomImageTopVal);
  int(randomImageTopVal);

  // Ensures that the picture is never the same as the one before.
  if (previousImageTopVal == randomImageTopVal) {
    topImage();
  }

  switch (randomImageTopVal) {
    case 1:
      image(hay, 200, 120, 200, 200);
      tint(20, 200);
      image(hay, 600, 120, 200, 200);
      noTint();
      previousImageTopVal = randomImageTopVal;
      break;

    case 2:
      image(farm, 200, 120, 200, 200);
      tint(20, 200);
      image(farm, 600, 120, 200, 200);
      noTint();
      previousImageTopVal = randomImageTopVal;
      break;

    case 3:
      image(horse, 200, 120, 200, 200);
      tint(20, 200);
      image(horse, 600, 120, 200, 200);
      noTint();
      previousImageTopVal = randomImageTopVal;
      break;

  }
}

// The following function displays a random image that appears on the bottom half of the screen for Activity 2.
function bottomImage() {

  // This part of the function determines a random integer that will dictate which picture will display. 
  randomImageBottomVal = random(1, 3);
  randomImageBottomVal = round(randomImageBottomVal);
  int(randomImageBottomVal);


  // Ensures that the picture is never the same as the one before.
  if (previousImageBottomVal == randomImageBottomVal) {
    bottomImage();
  }

  switch (randomImageBottomVal) {
    case 1:
      image(pig, 220, 325, 150, 150);
      tint(20, 200);
      image(pig, 620, 325, 150, 150);
      noTint();
      previousImageBottomVal = randomImageBottomVal;
      break;
    case 2:
      image(egg, 220, 325, 150, 150);
      tint(20, 200);
      image(egg, 620, 325, 150, 150);
      noTint();
      previousImageBottomVal = randomImageBottomVal;
      break;
    case 3:
      image(milkjug, 220, 325, 150, 150);
      tint(20, 200);
      image(milkjug, 620, 325, 150, 150);
      noTint();

  }
}

function paintActivityTwoBackground() {
  background(activity1BG);
  homeButton.position(50, 50);
  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(125, 25, 750, 100, 50);
  fill('black');
  textSize(75);
  strokeWeight(0);
  text("Drag and Match", 500, 100);

  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(100, 230, 100, 215, 60);
  textSize(20);
  fill('black')
  strokeWeight(0);
  text("Drag and match the shapes to win!", (width / 7), 275, 10);

}
function resetAct2() {
  // Reset Activty 2
  resetAct2TopImg();
  resetAct2BotImg();
  act2TopWon = false;
  act2BotWon = false;
}
function resetAct2TopImg() {
  // Top Picture Case 1 Variabels 
  hayX = 200;
  hayY = 120;
  // Top Picture Case 2 Variables 
  farmX = 200;
  farmY = 120;
  // Top Picture Case 3 Variables 
  horseX = 200;
  horseY = 120;
}
function resetAct2BotImg() {
  // Bottom Picture Case 1 Varibales
  pigX = 220;
  pigY = 325;
  // Bottom Picture Case 2 Varibales
  eggX = 220;
  eggY = 325;
  // Bottom Picture Case 3 Variables 
  milkX = 220;
  milkY = 325;
}

function dragAndMatch() {

  // TOP
  if (int(randomImageTopVal) == 1 && act2TopWon == false) {
    dHay = dist(mouseX, mouseY, hayX + 100, hayY + 100); // Distance between the HayXY and cursorXY
    dNHay = dist(hayX, hayY, hayNX, hayNY); // Distance between the HayXY and Negative HayXY
    // [TEST CODE TO BE DELETED]
    // textSize(40);
    // text("dNHay: " + dNHay + ", dHay: " + dHay, 500, 275);

    if (dHay < 80 && dNHay > 5) {
      hayX = mouseX - 100;
      hayY = mouseY - 100;
    }

    if (dNHay > 5) {
      tint(20, 200);
      image(hay, 600, 120, 200, 200);
      noTint();
      image(hay, hayX, hayY, 200, 200);

    } else {
      act2TopWon = true;
    }

  } else if (int(randomImageTopVal) == 2 && act2TopWon == false) {
    dFarm = dist(mouseX, mouseY, farmX + 100, farmY + 100); // Distance between the FarmXY and cursorXY
    dNFarm = dist(farmX, farmY, farmNX, farmNY); // Distance between the FarmXY and Negative FarmXY
    // [TEST CODE TO BE DELETED]
    // textSize(40);
    // text("dNFarm: " + dNFarm + ", dFarm: " + dFarm, 500, 275);

    if (dFarm < 80 && dNFarm > 5) {
      farmX = mouseX - 100;
      farmY = mouseY - 100;
    }

    if (dNFarm > 5) {
      tint(20, 200);
      image(farm, 600, 120, 200, 200);
      noTint();
      image(farm, farmX, farmY, 200, 200);

    } else {
      act2TopWon = true;
    }

  } else if (int(randomImageTopVal) == 3 && act2TopWon == false) {
    dHorse = dist(mouseX, mouseY, horseX + 100, horseY + 100); // Distance between the HorseXY and cursorXY
    dNHorse = dist(horseX, horseY, horseNX, horseNY); // Distance between the HorseXY and Negative HorseXY
    // [TEST CODE TO BE DELETED]
    // textSize(40);
    // text("dNHorse: " + dNHorse + ", dHorse: " + dHorse, 500, 275);

    if (dHorse < 80 && dNHorse > 5) {
      horseX = mouseX - 100;
      horseY = mouseY - 100;
    }

    if (dNHorse > 5) {
      tint(20, 200);
      image(horse, 600, 120, 200, 200);
      noTint();
      image(horse, horseX, horseY, 200, 200);

    } else {
      act2TopWon = true;
    }

  }

  // BOTTOM
  if (int(randomImageBottomVal) == 1 && act2BotWon == false) {
    dPig = dist(mouseX, mouseY, pigX + 75, pigY + 75); // Distance between the PigXY and cursorXY
    dNPig = dist(pigX, pigY, pigNX, pigNY); // Distance between the PigXY and Negative PigXY
    // [TEST CODE TO BE DELETED]
    // textSize(40);
    // text("dNPig: " + dNPig + ", dPig: " + dPig, 500, 475);

    if (dPig < 65 && dNPig > 5) {
      pigX = mouseX - 75;
      pigY = mouseY - 75;
    }

    if (dNPig > 5) {
      tint(20, 200);
      image(pig, 620, 325, 150, 150);
      noTint();
      image(pig, pigX, pigY, 150, 150);

    } else {
      act2BotWon = true;
    }

  } else if (int(randomImageBottomVal) == 2 && act2BotWon == false) {
    dEgg = dist(mouseX, mouseY, eggX + 75, eggY + 75); // Distance between the EggXY and cursorXY
    dNEgg = dist(eggX, eggY, eggNX, eggNY); // Distance between the EggXY and Negative EggXY
    // [TEST CODE TO BE DELETED]
    // textSize(40);
    // text("dNEgg: " + dNEgg + ", dEgg: " + dEgg, 500, 475);

    if (dEgg < 65 && dNEgg > 5) {
      eggX = mouseX - 75;
      eggY = mouseY - 75;
    }

    if (dNEgg > 5) {
      tint(20, 200);
      image(egg, 620, 325, 150, 150);
      noTint();
      image(egg, eggX, eggY, 150, 150);

    } else {
      act2BotWon = true;
    }

  } else if (int(randomImageBottomVal) == 3 && act2BotWon == false) {
    dMilk = dist(mouseX, mouseY, milkX + 75, milkY + 75); // Distance between the MilkXY and cursorXY
    dNMilk = dist(milkX, milkY, milkNX, milkNY); // Distance between the MilkXY and Negative MilkXY
    // [TEST CODE TO BE DELETED]
    // textSize(40);
    // text("dNMilk: " + dNMilk + ", dMilk: " + dMilk, 500, 475);

    if (dMilk < 65 && dNMilk > 5) {
      milkX = mouseX - 75;
      milkY = mouseY - 75;
    }

    if (dNMilk > 5) {
      tint(20, 200);
      image(milkjug, 620, 325, 150, 150);
      noTint();
      image(milkjug, milkX, milkY, 150, 150);

    } else {
      act2BotWon = true;
    }

  }

  // paint the unmovable red images

  tint(70, 500, 70);
  if (int(randomImageTopVal) == 1 && act2TopWon == true) {
    image(hay, 600, 120, 200, 200);
  } else if (int(randomImageTopVal) == 2 && act2TopWon == true) {
    image(farm, 600, 120, 200, 200);
  } else if (int(randomImageTopVal) == 3 && act2TopWon == true) {
    image(horse, 600, 120, 200, 200);
  }
  if (int(randomImageBottomVal) == 1 && act2BotWon == true) {
    image(pig, 620, 325, 150, 150);
  } else if (int(randomImageBottomVal) == 2 && act2BotWon == true) {
    image(egg, 620, 325, 150, 150);
  } else if (int(randomImageBottomVal) == 3 && act2BotWon == true) {
    image(milkjug, 620, 325, 150, 150)
  }
  noTint();

  if (act2TopWon == true && act2BotWon == true) {
    pageSel = "tryAgain2";
    tryAgainCC = 0;

    background(activity1BG);
    homeButton.position(50, 50);

    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect(125, 25, 750, 100, 50);
    fill('black');
    textSize(75);
    strokeWeight(0);
    text("Drag and Match", 500, 100);
    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect((width / 4), 215, (width / 2), 100, 50);
    strokeWeight(0);
    fill('black');
    text("YOU WIN!", 500, 300);

    textSize(70);
    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect((width / 4), 390, (width / 2), 100, 50);
    strokeWeight(0);
    fill('black');
    text("Try Again?", (width / 2), 475);
  }

}

// The following function paints and operates the activity three page.
function activityThree() {
  background(activity1BG);
  homeButton.position(50, 50);
  pageSel = "activity3";
  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(125, 25, 750, 100, 50);

  fill('black');
  textSize(70);
  strokeWeight(0);
  text("Trace the Shape", 500, 100);
  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(100, 210, 150, 215, 50);
  textSize(30);
  fill('black')
  strokeWeight(0);
  text("Trace the Shape to Win!", 165, 260, 10);

  textSize(35);
  strokeWeight(1);
  fill(196, 164, 132, 250);
  rect(675, 210, 300, 175, 50);

  fill('black');
  strokeWeight(0);
  text("Start at the Green Dot", 675, 270, 290);


  if (sameShape == false) {
    randomColorGenerator();
  }

  randomShapeGenerator();




}

// The following function generates a random color everytime activity 3 is called.
function randomColorGenerator() {
  if (sameColor == false) {
    randomColorVal = random(1, 5);
    randomColorVal = round(randomColorVal);
    int(randomColorVal);


  }

  switch (randomColorVal) {
    case 1:
      randomColor = color(144, 238, 144);

      break;
    case 2:
      randomColor = color(255, 182, 193);

      break;
    case 3:
      randomColor = color(173, 216, 230);

      break;
    case 4:
      randomColor = color(203, 195, 227);

      break;
    case 5:
      randomColor = color(255, 252, 187);

      break;

  }

}

// The following function generates a random shape everytime activity 3 is called.
function randomShapeGenerator() {



  if (sameShape == false) {
    randomShape = random(1, 3);
    randomShape = round(randomShape);
    int(randomShape);


    if (randomShape == prevRandomShape) {
      randomShapeGenerator();
    }
  }




  switch (randomShape) {
    case 1:

      // noFill();
      // image(hay, sqrX - 50, sqrY - 50, shapeSize + 75, shapeSize + 75);
      strokeWeight(3);
      fill(randomColor);
      rect(sqrX, sqrY, shapeSize, shapeSize);
      strokeWeight(0);
      ellipseMode(CENTER);
      fill('green');
      ellipse(sqrX, sqrY, 15);
      prevRandomShape = randomShape;
      fill('black');
      break;

    case 2:
      // noFill();
      strokeWeight(3);
      fill(randomColor);
      rect(sqrX, sqrY + 50, shapeSize, shapeSize / 2);
      strokeWeight(0);
      ellipseMode(CENTER);
      fill('green');
      ellipse(sqrX, sqrY + 50, 15);
      prevRandomShape = randomShape;
      fill('black');
      break;

    case 3:
      strokeWeight(1);
      imageMode(CENTER);
      // image(apple, width / 2, height / 2 + 50, shapeSize, shapeSize);
      // noFill();
      fill(randomColor);
      ellipseMode(CENTER);
      strokeWeight(3);
      ellipse(width / 2, height / 2 + 50, shapeSize);
      strokeWeight(0);
      ellipseMode(CENTER);
      fill('green');
      ellipse(500, 150, 15);
      prevRandomShape = randomShape;
      imageMode(CORNER);
      fill('black');
      break;
  }
}
// The following function paints and operates the settings page.
function settings() {
  strokeWeight(1);
  background(activity1BG);
  homeButton.position(50, 50);
  fill(196, 164, 132, 250);
  strokeWeight(1);
  rect(125, 25, 750, 100, 50);
  fill('black');
  textSize(75);
  strokeWeight(0);
  text("Settings", 500, 100);
  strokeWeight(1);
  muteButton.position((width / 2) + 170, height / 2 + 70);
  gainSlider.position((width / 2) - 170, height / 2 + 70);
  textSize(50);
  fill(196, 164, 132, 250);
  strokeWeight(1);
  rect(75, 180, 850, 100, 350);
  fill('black');
  strokeWeight(0);
  text("this controls the volume", width / 2, 250);

}

function tog() { //calls certain funcitons depending on if we are mutes
  if (muteState == true) {
    muteStateN = 1; //turns mute off
    muteState = false;//adjusts state variable
  } else {
    muteStateN = 0; //turns mute on
    muteState = true; //adjusts state variable
  }
}

// The following function paints and operates the home page.
function home() {
  sameColor = false;
  sameShape = false;
  pageSel = "home";

  // Moves unecessary buttons off screen.
  act1Button.position(0, 510);
  homeButton.position(0, 501);
  gainSlider.position(9999, 9999);
  muteButton.position(9999, 9999);


  textFont(myFont);

  createCanvas(1000, 500);



  // Title text & Background
  background(mainMenuImg);
  textSize(40)
  textAlign(CENTER);
  fill(196, 164, 132, 250);
  rect(150, 35, 675, 90, 50);
  fill('black');
  strokeWeight(0);
  text("Moo Moo's Farm Adventure", 500, 100);
  strokeWeight(1);

  textSize(40);

  // Menu buttons
  fill(196, 164, 132, 250);
  rect(150, 250, 300, 100, 50);
  strokeWeight(0);
  fill('black');
  textAlign(CENTER);
  strokeWeight(0);
  text("Activity 1", 300, 315);
  strokeWeight(1);

  fill(196, 164, 132, 250);
  rect(500, 250, 300, 100, 50)
  fill('black');
  textAlign(CENTER);
  strokeWeight(0);
  text("Activity 2", 650, 315);
  strokeWeight(1);

  fill(196, 164, 132, 250);
  rect(150, 375, 300, 100, 50)
  fill('black');
  textAlign(CENTER);
  strokeWeight(0);
  text("Activity 3", 300, 440);
  strokeWeight(1);

  fill(196, 164, 132, 250);
  rect(500, 375, 300, 100, 50)
  fill('black');
  textAlign(CENTER);
  strokeWeight(0);
  text("Settings", 650, 440);
  strokeWeight(1);

  // Reset Activty 2
  resetAct2();

}

function musicPlay() {
  mainMusic.setVolume(0.1 * gainSlider.value() * muteStateN);
  mainMusic.play(0.1, 1, 3, 0.1, 155);
}

function draw() {


  mainMusic.setVolume(0.1 * gainSlider.value() * muteStateN);
  if (frameCount > 400 && !mainMusic.isPlaying()) {
    musicPlay();
  }
  strokeWeight(0);

  circleD = dist(width / 2, height / 2 + 50, mouseX, mouseY);

  // Decides which page is opened based on click position.
  if (pageSel == "home") {
    homeButton.position(999, 999);
    act1Button.position(999, 999);

    if (cursorX >= 150 && cursorX <= 450 && cursorY >= 250 && cursorY <= 350) {
      pageSel = "activity1";
      activityOne();

    } else if (cursorX >= 500 && cursorX <= 800 && cursorY >= 250 && cursorY <= 350) {
      pageSel = "activity2";
      activityTwo();


    } else if (cursorX >= 150 && cursorX <= 450 && cursorY >= 375 && cursorY <= 475) {
      pageSel = "activity3";
      activityThree();


    } else if (cursorX >= 500 && cursorX <= 800 && cursorY >= 375 && cursorY <= 475) {
      pageSel = "settings";
      settings();
    }



  }





  // Activity 2 check of distance, and paints the background
  if (pageSel == "activity2" && mouseIsPressed === true) {
    paintActivityTwoBackground();
    dragAndMatch();
  }


  // Resets game if user selects try again.
  if (pageSel == "tryAgain" && gameCompleted == true) {
    if (cursorX >= 250 && cursorX <= 750 && cursorY >= 390 && cursorY <= 490) {
      if (tryAgainCC >= 1) {
        act1Button.position(999, 999);
        pageSel = "activity1";
        gameCompleted = false;
        activityOne();
      }
    }

  }

  if (pageSel == "tryAgain2" && act2TopWon == true && act2BotWon == true) {
    if (cursorX >= 250 && cursorX <= 750 && cursorY >= 390 && cursorY <= 490) {
      if (tryAgainCC >= 2) {
        pageSel = "activity2";
        activityTwo();
        resetAct2();
        tryAgainCC = 0;
      }
    }

  }



  if (pageSel == "activity3" && mouseIsPressed == true) {
    tracing = true;
    strokeWeight(15);
    if (randomShape == 1) {

      // Checks if top left corner is passed
      if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= sqrY - 20 && mouseY <= sqrY + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck1 = true;
      }
      // Checks if top right corner is passed
      else if (mouseX >= sqrX + (shapeSize - 20) && mouseX <= sqrX + (shapeSize + 20) && mouseY >= sqrY - 20 && mouseY <= sqrY + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck2 = true;
        // Checks if bottom left corner is passed
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= sqrY + (shapeSize - 20) && mouseY <= sqrY + (shapeSize + 20)) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck3 = true;
      } else if (mouseX >= sqrX + (shapeSize - 20) && mouseX <= sqrX + (shapeSize + 20) && mouseY >= sqrY + (shapeSize - 20) && mouseY <= sqrY + (shapeSize + 20)) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck4 = true;
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= (sqrY + 10) - 20 && mouseY <= (sqrY + 10) + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck5 = true;
      }
      // Paints green for top size
      else if (mouseX >= sqrX - 20 && mouseX <= sqrX + (shapeSize + 20) && mouseY >= (sqrY) - 20 && mouseY <= (sqrY) + 20) {
        stroke('green');
        point(mouseX, mouseY);
        // Paints green for bottom side
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + (shapeSize + 20) && mouseY >= (sqrY) + 280 && mouseY <= (sqrY) + 320) {
        stroke('green');
        point(mouseX, mouseY);

        // Paints green for left side
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= (sqrY) - 20 && mouseY <= (sqrY) + (shapeSize + 20)) {
        stroke('green');
        point(mouseX, mouseY);
        // Paints green for right side
      } else if (mouseX >= sqrX + 280 && mouseX <= sqrX + 320 && mouseY >= (sqrY) - 20 && mouseY <= (sqrY) + (shapeSize + 20)) {
        stroke('green');
        point(mouseX, mouseY);
      } else {
        stroke('red');
        point(mouseX, mouseY);
      }
    } else if (randomShape == 2) {
      // Checks if top left corner is passed
      if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= (sqrY + 50) - 20 && mouseY <= (sqrY + 50) + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck1 = true;
      }
      // Checks if top right corner is passed
      else if (mouseX >= sqrX + (shapeSize - 20) && mouseX <= sqrX + (shapeSize + 20) && mouseY >= (sqrY + 50) - 20 && mouseY <= (sqrY + 50) + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck2 = true;
        // Checks if bottom left corner is passed
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= (sqrY + 50) + ((shapeSize / 2) - 20) && mouseY <= (sqrY + 50) + ((shapeSize / 2) + 20)) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck3 = true;
      } else if (mouseX >= sqrX + (shapeSize - 20) && mouseX <= sqrX + (shapeSize + 20) && mouseY >= (sqrY + 50) + ((shapeSize / 2) - 20) && mouseY <= (sqrY + 50) + ((shapeSize / 2) + 20)) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck4 = true;
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= (sqrY + 60) - 20 && mouseY <= (sqrY + 60) + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck5 = true;
      }
      // Paints green for top size
      else if (mouseX >= sqrX - 20 && mouseX <= sqrX + (shapeSize + 20) && mouseY >= (sqrY + 50) - 20 && mouseY <= (sqrY + 50) + 20) {
        stroke('green');
        point(mouseX, mouseY);
        // Paints green for bottom side
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + (shapeSize + 20) && mouseY >= ((sqrY + 50) + shapeSize / 2) - 20 && mouseY <= ((sqrY + 50) + shapeSize / 2) + 20) {
        stroke('green');
        point(mouseX, mouseY);

        // Paints green for left side
      } else if (mouseX >= sqrX - 20 && mouseX <= sqrX + 20 && mouseY >= (sqrY + 50) - 20 && mouseY <= (sqrY + 50) + ((shapeSize / 2) + 20)) {
        stroke('green');
        point(mouseX, mouseY);
        // Paints green for right side
      } else if (mouseX >= sqrX + 280 && mouseX <= sqrX + 320 && mouseY >= (sqrY + 50) - 20 && mouseY <= (sqrY + 50) + ((shapeSize / 2) + 20)) {
        stroke('green');
        point(mouseX, mouseY);
      } else {
        stroke(0);
        stroke('red');
        point(mouseX, mouseY);
      }
    } else if (randomShape == 3) {
      // strokeWeight(1);
      // stroke('black');
      // text(mouseX + " " + mouseY, 250, 250);
      if (mouseX >= 465 - 20 && mouseX <= 465 + 20 && mouseY >= 150 - 20 && mouseY <= 150 + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck1 = true;
      }
      // Checks if top right corner is passed
      else if (mouseX >= 530 - 20 && mouseX <= 530 + 20 && mouseY >= 150 - 20 && mouseY <= 150 + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck2 = true;
        // Checks if bottom left corner is passed
      } else if (mouseX >= 650 - 20 && mouseX <= 650 + 20 && mouseY >= 305 - 20 && mouseY <= 305 + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck3 = true;
      } else if (mouseX >= 350 - 20 && mouseX <= 350 + 20 && mouseY >= 305 - 20 && mouseY <= 305 + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck4 = true;
      } else if (mouseX >= 500 - 20 && mouseX <= 500 + 20 && mouseY >= 450 - 20 && mouseY <= 450 + 20) {
        stroke('green');
        point(mouseX, mouseY);
        squareCheck5 = true;
      }
      else if (circleD >= circleRad - 20 && circleD <= circleRad + 20) {
        stroke('green');
        point(mouseX, mouseY);
      } else {
        stroke(0);
        stroke('red');
        point(mouseX, mouseY);
      }
    }


    else {
      stroke(0);
      stroke('red');
      point(mouseX, mouseY);

    }
  }






  if (squareCheck1 == true && squareCheck2 == true && squareCheck3 == true && squareCheck4 == true && squareCheck5 == true) {
    squareChecks = true;




  }

  if (pageSel == "activity3" && squareChecks == true) {
    stroke('black');
    tryAgainCC = 0;
    pageSel = "tryAgain3";
    tracing = false;
    background(activity1BG);
    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect(125, 25, 750, 100, 50);
    fill('black');
    textSize(70);
    strokeWeight(0);
    text("Trace the Shape", 500, 100);
    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect((width / 4), 215, (width / 2), 100, 50);
    strokeWeight(0);
    fill('black');
    text("YOU WIN!", 500, 300);

    textSize(70);
    strokeWeight(1);
    fill(196, 164, 132, 250);
    rect((width / 4), 390, (width / 2), 100, 50);
    strokeWeight(0);
    fill('black');
    text("Try Again?", (width / 2), 475);

    resetAct3();


  }
  if (pageSel == "tryAgain3") {
    if (cursorX >= 250 && cursorX <= 750 && cursorY >= 390 && cursorY <= 490) {
      if (tryAgainCC >= 2) {

        activityThree();
        tryAgainCC = 0;
      }
    }
  }
}

function mouseReleased() {

  if (pageSel == "activity3" && tracing == true) {
    {
      strokeWeight(0);
      sameShape = true;
      sameColor = true;
      stroke('black');
      fill('black');
      activityThree();
      squareCheck1 = false;
      squareCheck2 = false;
      squareCheck3 = false;
      squareCheck4 = false;
      squareCheck5 = false;
      tracing = false;
    }
  }
}

function resetAct3() {


  squareCheck1 = false;
  squareCheck2 = false;
  squareCheck3 = false;
  squareCheck4 = false;
  squareCheck5 = false;
  squareChecks = false;
  tracing = false;
  sameShape = false;
  sameColor = false;
  stroke('black');
}







