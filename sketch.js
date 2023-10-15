let pageSel = "home";
let homePage = true;
let cursorX = 0;
let cursorY = 0;
let act1Start = false;
let circleX = 0;
let circleY = 0;
let homeButton;


function preload() {
myFont = loadFont('HeehawRegular-PZy7[1].ttf');
mainMenuImg = loadImage("farmmainmenu.jpg");
activity1BG = loadImage("whackamoleBG.jpg");
moleWHH = loadImage("mole.jpg");

}
// The setup function creates and prints the entire home page
function setup() {
textFont(myFont);
pageSel = "home";
createCanvas(1000, 500);
homeButton = createButton("Go home");
homeButton.mousePressed(home);

// Title text & Background
background(mainMenuImg);
textSize(50)
textAlign(CENTER);
fill(196, 164, 132,250);
rect(150,35,675,90,50);
fill('black');
text("FSE Master Project ", 500,100);

textSize(40);

// Menu buttons
fill(196, 164, 132,250);
rect(150,250,300,100,50);
fill('black');
textAlign(CENTER);
text("Activity 1", 300,315);


  fill(196, 164, 132,250);
rect(500,250,300,100,50)
  fill('black');
textAlign(CENTER);
text("Activity 2", 650,315);

  fill(196, 164, 132,250);
rect(150,375,300,100,50)
  fill('black');
textAlign(CENTER);
text("Activity 3", 300,440);

  fill(196, 164, 132,250);
rect(500,375,300,100,50)
  fill('black');
textAlign(CENTER);
text("Settings", 650,440);
}


// The function below waits until the user selects one of the menu options
function mouseClicked() {
cursorY = mouseY;
cursorX = mouseX;
print(cursorX);

if(pageSel ==  "activity1") {
  if(cursorX > 100) {
    WhackAMole();
    print("getting here");
  }
}
}

//The following functions setup and operate each of the individual pages.

function activityOne() {
createCanvas(1000,500)


  background(activity1BG);

  image(moleWHH,800, 150);
moleWHH.resize(300,300);

homeButton.position(50,50);
textSize(80);
fill('black');  
text("Whack-a-Mole", 550,75);
textSize(40);
text("Time Left: ", 950,150)


fill('green');


fill('brown')
strokeWeight(1);
circle(300,250,75);
circle(450,250,75);
circle(600,250,75);
circle(300,350,75);
circle(450,350,75);
circle(600,350,75);
circle(300,450,75);
circle(450,450,75);
circle(600,450,75);



}

function WhackAMole() {



var whackValue;
whackValue = random(1,9);
whackValue = round(whackValue);
int(whackValue);
print(whackValue);

switch(whackValue) {
 case 1: 
   activityOne();
     fill('purple');
   square(300,250,10);
   break;
   case 2:
   activityOne();
     fill('purple');
   square(450,250,10);
   break;
   case 3:
   activityOne();
     fill('purple');
   square(600,300,10);
   
   break;
   case 4:
   activityOne();
     fill('purple');
   square(300,350,10);
   break;
   case 5: 
   activityOne();
     fill('purple');
   square(450,350,10);
   break;
   case 6: 
   activityOne();
     fill('purple');
   square(600,350,10);
   break;
   case 7:
   activityOne();
     fill('purple');
   square(300,450,10);
   break;
   case 8:
   activityOne();
     fill('purple');
   square(450,450,10);
   break;
   case 9: 
   activityOne();
     fill('purple');
   square(600,450,10);
   break;
} 



}



function activityTwo() {
    background(activity1BG);
homeButton.position(50,50);
  text("Activity 2", 500,100);
  pageSel = "activityTwo";

}

function activityThree() {
background(activity1BG);
homeButton.position(50,50);
text("Activity 3", 500,100);
pageSel = "activityThree";

}

function settings() {
background(activity1BG);
homeButton.position(50,50);
text("Settings", 500,100);
pageSel = "settings";

}
function home() {
homeButton.position(0,501);
textFont(myFont);
pageSel = "home";
createCanvas(1000, 500);

// Title text & Background
background(mainMenuImg);
textSize(50)
textAlign(CENTER);
fill(196, 164, 132,250);
rect(150,35,675,90,50);
fill('black');
text("FSE Master Project ", 500,100);

textSize(40);

// Menu buttons
fill(196, 164, 132,250);
rect(150,250,300,100,50);
fill('black');
textAlign(CENTER);
text("Activity 1", 300,315);


fill(196, 164, 132,250);
rect(500,250,300,100,50)
fill('black');
textAlign(CENTER);
text("Activity 2", 650,315);

fill(196, 164, 132,250);
rect(150,375,300,100,50)
fill('black');
textAlign(CENTER);
text("Activity 3", 300,440);

fill(196, 164, 132,250);
rect(500,375,300,100,50)
fill('black');
textAlign(CENTER);
  text("Settings", 650,440);

}


function draw() {
  

// Decides which page is opened based on click position
if(pageSel == "home") {
if(cursorX >= 150 && cursorX <= 450 && cursorY >= 250 && cursorY <= 350 ) {
 pageSel = "activity1";
  activityOne();

} else if(cursorX >= 500 && cursorX <= 800 && cursorY >= 250 && cursorY <= 350 ) {
  pageSel = "activity2";
  activityTwo();

  
} else if(cursorX >= 150 && cursorX <= 450 && cursorY >= 375 && cursorY <= 475 ) {
  pageSel = "activity3";
  activityThree();

  
} else if(cursorX >= 500 && cursorX <= 800 && cursorY >= 375 && cursorY <= 475 ) {
  pageSel = "settings";
  settings();
}    


  
}







}