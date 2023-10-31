
// Declares the unviersal variables used throughout the program
let pageSel = "home";
let homePage = true;
let cursorX = 0;
let cursorY = 0;
let homeButton;

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
var TARGETSCORE = 1;

// Activity two variables
var rectPosX;
var rectPosY;
var trianglePosX;
var tranglePosY;


// The function preload contains all of our visual assets that need to be loaded before running the application
function preload() {

  myFont = loadFont('HeehawRegular-PZy7.ttf');
  mainMenuImg = loadImage("farmmainmenu.jpg");
  activity1BG = loadImage("newfarmpic.png");
  moleWHH = loadImage("mole2.png");
  smallMole = loadImage("mole2.png");
  coinSound = loadSound("coinSound.mp3")


}
// The setup function creates and prints the entire home page
function setup() {

  textFont(myFont);
  pageSel = "home";
  createCanvas(1000, 500);

  // The code below creates the necessary buttons 
  homeButton = createButton("Go home");
  homeButton.mouseClicked(home);
  act1Button = createButton("Begin game");
  act1Button.mouseClicked(startWhackAMole);

  // Title text & Background
  background(mainMenuImg);
  textSize(50)
  textAlign(CENTER);
  fill(196, 164, 132, 250);
  rect(150, 35, 675, 90, 50);
  fill('black');
  text("FSE Master Project ", 500, 100);


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
  print(cursorX);


// The following segment of code determines if activity 1 is active and if so determines if the user is clicking close enough to each mole. 
// If so, it plays a coin noise, adds to the score, and calls whackAMole
// If not, it plays an error noise.
  if (pageSel == "activity1" & game1On == true) {
    correctGuess = true;
    let d = dist(mouseX, mouseY, molePosX, molePosY);
    if (d <= 30) {
      coinSound.play();
      score++;
      WhackAMole();
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
  text("Whack-a-Mole", 500, 100);
  textSize(35);
  fill(196, 164, 132, 250);
  rect(650, 210, 330, 175, 50);

  fill('black');
  text("Get " + TARGETSCORE + " to Win!", 810, 275);
  textSize(30);
  text("Current score: " + score, 820, 350);





  fill('green');


  fill("#6e4f32");
  strokeWeight(1);
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
  rect(100,230,100, 215, 60);
  fill('black')
  text("Tap the mole to win!",(width/7),275, 10);
  
}

// The purpose of this function is to activate the variable that represents activity 1's status.
// When called, flips the game 1 "On switch" and calls it for the first time.
function startWhackAMole() {
  if (game1On == false) {

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
        image(smallMole, 275, 230, 75, 75);
        molePosX = 300;
        molePosY = 250;
        break;
      case 2:
        activityOne();

        image(smallMole, 425, 230, 75, 75);
        molePosX = 450;
        molePosY = 250;
        break;
      case 3:
        activityOne();

        image(smallMole, 575, 230, 75, 75);
        molePosX = 600;
        molePosY = 250;
        break;
      case 4:
        activityOne();

        image(smallMole, 275, 320, 75, 75);
        molePosX = 300;
        molePosY = 350;
        break;
      case 5:
        activityOne();

        image(smallMole, 425, 320, 75, 75);
        molePosX = 450;
        molePosY = 350;
        break;
      case 6:
        activityOne();

        image(smallMole, 575, 320, 75, 75);
        molePosX = 600;
        molePosY = 350;
        break;
      case 7:
        activityOne();

        image(smallMole, 275, 430, 75, 75);
        molePosX = 300;
        molePosY = 450;
        break;
      case 8:
        activityOne();

        image(smallMole, 425, 430, 75, 75);
        molePosX = 450;
        molePosY = 450;
        break;
      case 9:
        activityOne();

        image(smallMole, 575, 430, 75, 75);
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
    text("Whack-a-Mole", 500, 100);
    fill(200, 0, 0);
    image(smallMole, 999, 999, 1, 1);
    fill(196, 164, 132, 250);
    rect((width/4),215,(width/2),100,50);
    fill('black');
    text("YOU WIN!", 500, 300);
    textSize(70);
    

    fill(196, 164, 132, 250);
    rect((width / 4), 390, (width / 2), 100, 50);

    fill('black');
    text("Try Again?", (width / 2), 475);


    act1Button.position(900, 900);
    game1On = false;
    score = 0;
    correctGuess = true;
    gameCompleted = true;
    pageSel == "tryAgain"
  }
}








// The following function paints and operates the activity two page.
function activityTwo() {
  background(activity1BG);
  homeButton.position(50, 50);
  text("Activity 2", 500, 100);
  pageSel = "activityTwo";
  strokeWeight(0);
  fill("white");
  square(175,200,100);
  fill("black");
  square(600,200,100);
  triangle(225,350,160,450,285,450);
  fill("white");
  triangle(650,350,600,450,710,450);
  fill("yellow");
  rect(525,250,50,5);
  rect(450,250,50,5);
  rect(375,250,50,5);
  rect(300,250,50,5);
  rect(525,400,50,5);
  rect(450,400,50,5);
  rect(375,400,50,5);
  rect(300,400,50,5);

}

// The following function paints and operates the activity three page.
function activityThree() {
  background(activity1BG);
  homeButton.position(50, 50);
  text("Activity 3", 500, 100);
  pageSel = "activityThree";

}
// The following function paints and operates the settings page.
function settings() {
  background(activity1BG);
  homeButton.position(50, 50);
  text("Settings", 500, 100);
  pageSel = "settings";

}

// The following function paints and operates the home page.
function home() {
  pageSel = "home";

  // Moves unecessary buttons off screen.
  act1Button.position(0, 510);
  homeButton.position(0, 501);

  textFont(myFont);

  createCanvas(1000, 500);

  // Title text & Background
  background(mainMenuImg);
  textSize(50)
  textAlign(CENTER);
  fill(196, 164, 132, 250);
  rect(150, 35, 675, 90, 50);
  fill('black');
  text("FSE Master Project ", 500, 100);

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


function draw() {


  // Decides which page is opened based on click position.
  if (pageSel == "home") {
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

  // Resets game if user selects try again.
  if (pageSel == "tryAgain" && gameCompleted == true) {
    if (mouseX >= 250 && mouseX <= 750) {
      text("testtestest", 500, 300);
      gameCompleted = false;
    }

  }


}





