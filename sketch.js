
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





function preload() {
myFont = loadFont("HeehawRegular-PZy7.ttf");
  mainMenuImg = loadImage("farmmainmenu.jpg");
  activity1BG = loadImage("newfarmpic.png");
  moleWHH = loadImage("mole2.png");
  smallMole = loadImage("mole2.png");
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
  textSize(50);
  textAlign(CENTER);
  fill(196, 164, 132, 250);
  rect(150, 35, 675, 90, 50);
  fill("black");
  text("FSE Master Project ", 500, 100);

  textSize(40);

  // Menu buttons
  fill(196, 164, 132, 250);
  rect(150, 250, 300, 100, 50);
  fill("black");
  textAlign(CENTER);
  text("Activity 1", 300, 315);

  fill(196, 164, 132, 250);
  rect(500, 250, 300, 100, 50);
  fill("black");
  textAlign(CENTER);
  text("Activity 2", 650, 315);

  fill(196, 164, 132, 250);
  rect(150, 375, 300, 100, 50);
  fill("black");
  textAlign(CENTER);
  text("Activity 3", 300, 440);

  fill(196, 164, 132, 250);
  rect(500, 375, 300, 100, 50);
  fill("black");
  textAlign(CENTER);
  text("Settings", 650, 440);
}

// The function below waits until the user selects one of the menu options
function mouseClicked() {
  cursorY = mouseY;
  cursorX = mouseX;
  
  
  if ((pageSel == "activity1") && (game1On == true)) {
    correctGuess = true;
    let d = dist(mouseX, mouseY, molePosX, molePosY);
    if (d <= 30) {
      coinSound.play();
      score++;
      WhackAMole();
    }
  }
}

//The following functions setup and operate each of the individual pages.

function activityOne() {
  createCanvas(1000, 500);

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
  text("Get 10 to Win!", 810, 275);
  textSize(30);
  text("Current score: " + score, 820, 350);





  fill('green');


  fill('brown')
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




}

function startWhackAMole() {
  if (game1On == false) {

    game1On = true;
    WhackAMole();
  }
}

function WhackAMole() {

  while (game1On && correctGuess && score <= 10) {
    correctGuess = false;

    whackValue = random(1, 9);
    whackValue = round(whackValue);
    int(whackValue);
    

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

  if (score > 9) {
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
    text("YOU WIN!", (width / 2) - 100, 275, 200, 300);
    textSize(70);

    fill(196, 164, 132, 250);
    rect((width / 4), 390, (width / 2), 100, 50);

    fill('black');
    text("Try Again?", (width / 2),475);

    
    act1Button.position(900, 900);
    game1On = false;
    score = 0;
    correctGuess = true;
    gameCompleted = true;
    pageSel == "tryAgain"
  }
}









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
  triangle(225,400,175,600,275,600);
  fill("red");
  rect(525,250,50,5);
  rect(450,250,50,5);
  rect(375,250,50,5);
  rect(300,250,50,5);
}

function activityThree() {
  background(activity1BG);
  homeButton.position(50, 50);
  text("Activity 3", 500, 100);
  pageSel = "activityThree";
}

function settings() {
  background(activity1BG);
  homeButton.position(50, 50);
  text("Settings", 500, 100);
  pageSel = "settings";
}
function home() {
  pageSel = "home";
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


  // Decides which page is opened based on click position
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

  if (pageSel == "tryAgain" && gameCompleted == true) {
    if(mouseX >= 250 && mouseX <= 750) {
      text("testtestest", 500, 300);
      gameCompleted = false;
    }

  }


}





