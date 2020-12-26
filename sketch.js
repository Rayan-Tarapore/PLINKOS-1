const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var grd1,grd2,grd3,grd4
var plate1,plate2,plate3,plate4,plate5
var pegs = [];
var particles = [];

function setup() {
  createCanvas(900,480);
   engine = Engine.create();
   world = engine.world;
  
  grd1 = new Ground(450,470,900,20);
  grd2 = new Ground(450,10,900,20);
  grd3 = new Ground(890,240,20,480);
  grd4 = new Ground(10,240,20,480);

  plate1 = new Ground(150,380,5,200);
  plate2 = new Ground(300,380,5,200);
  plate3 = new Ground(450,380,5,200);
  plate4 = new Ground(600,380,5,200);
  plate5 = new Ground(750,380,5,200);
  
  for(i=50;i<=870;i=i+50){
    pegs.push(new Peg(i,75,10));
    }
  for(j=75;j<=850;j=j+50){
    pegs.push(new Peg(j,150,10));
    }
  for(k=50;k<=870;k=k+50){
    pegs.push(new Peg(k,225,10));
    }
  
}

function draw() {
  background(200);  
  
 

    if(frameCount%15===0){
      particles.push(new Plinko(random(width/2-200,width/2+200),10,10))
    }
    for(a=0;a<particles.length;a++){
      particles[a].display();
    }
    
  drawSprites();
  Engine.update(engine);

  grd1.display();
  grd2.display();
  grd3.display();
  grd4.display();

  plate1.display();
  plate2.display();
  plate3.display();
  plate4.display();
  plate5.display();

  
  for(i=0;i<pegs.length;i++){
    pegs[i].display();
  }
  for(j=0;j<pegs.length;j++){
    pegs[j].display();
  }
  for(k=0;k<pegs.length;k++){
    pegs[k].display();
  }
}