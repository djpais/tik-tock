var hr,min,sec 
var seAngle,mnAngle,hrAngle
 
 function setup() {
  createCanvas(800,400);
  angleMode (DEGREES)
}

function draw() {

  background(0); 
  translate (200,200) 
  rotate (-90)
  
  hr= hour()
  min= minute()
  sec= second()

  scAngle = map(sec,0,60,0,360)
  mnAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)

  push ()
  rotate (scAngle)
  stroke ("red")
  strokeWeight ("6")
  line (0,0,100,0)
  pop ()

  push ()
  rotate (mnAngle)
  stroke ("green")
  strokeWeight ("6")
  line (0,0,75,0)
  pop ()

  push ()
  rotate (hrAngle)
  stroke ("blue")
  strokeWeight ("6")
  line (0,0,50,0)
  pop ()

  stroke ("neon")
  point (0,0)

  //drawing the arcs
   strokeWeight(10);
   noFill();

    //Seconds
     stroke(255,0,0);
     arc(0,0,300,300,0,scAngle);

      //Minutes
       stroke(0,255,0);
       arc(0,0,280,280,0,mnAngle);

        //Hour
         stroke(0,0,255);
         arc(0,0,260,260,0,hrAngle);

}