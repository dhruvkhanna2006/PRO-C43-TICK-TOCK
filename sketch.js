var hr,sec,min;
var secAngle,minAngle;
function setup() {
  createCanvas(800,600);
   
   angleMode(DEGREES);
  
}

function draw() {
  background(0);
  hr = hour();
  min = minute();
  sec = second();
  secAngle = map(sec,0,60,0,360);
 
  push();
  translate(400,300);
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,210,0);
  pop()

  minAngle = map(min,10,60,0,360);
  push();
  translate(400,300);
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  hourAngle = map(hr,0,60,0,360);
  push();
  translate(400,300);
  rotate(hourAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,90,0);
  
  stroke(255,0,0);
  strokeWeight(5);
  noFill();
  arc(0,0,450,450,-950,secAngle+583);
  
  stroke(0,255,0);
  strokeWeight(5);
  arc(0,0,470,470,130,hourAngle+223);

  stroke(0,0,255);
  strokeWeight(5);
  arc(0,0,490,490,130,minAngle+220);
}
