let background1
let background2
let background3
let background4
let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  colorMode(HSB)
  stroke(0); 
  strokeWeight(9); 

  fill (240,100,30)
  rect(1280,0,1280, 1920)
  
  fill(200,100,100)
  rect (0,0,1280, 1920)

  if(firstRun){
     background1 = loadImage('background1.png')
     background2 = loadImage('background2.png')
     background3 = loadImage('background3.png')
     background5 = loadImage('background5.png')
     background6 = loadImage('background6.png')
    firstRun = false
    }

image(background1,10,-90,400,400)
image(background2,1000,0,300,300)
image(background5,5,-50,600,400)
image(background6,0,200,400,400)

fill (240,100,30)
//rect(0,0,1280,1920)

fill(200,100,100)
//rect (1280,0,1280, 1920)


let RightSize = map(drum, 0,100,70,220)
fill (map(drum,0,100,0,255),100,100);
ellipse(320,150, RightSize, RightSize)

  
let LefttSize = map(bass, 0, 100,70,220)
fill (map(bass,0,100,180,360),100,100)
ellipse(960,150, LefttSize, LefttSize)


let mouthSize = map(vocal, 0,100, 60, 350)
fill(map(vocal,0,100,100,360),100,100)
rect(640, 550,200, mouthSize )

let bar_spacing = height / 10;
let bar_height = width / 12; let bar_pos_x = width / 2;
 
line(320, 500, 100, 430)  
line(320, 550, 100, 550) 
line(320, 600, 100, 650)

line (960, 500, 1180, 430)
line (960, 550, 1180, 550)
line (960, 600, 1180, 650)
   
rect (640, 350,100, 70)

   // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3)
}