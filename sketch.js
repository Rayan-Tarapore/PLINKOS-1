var grd1,grd2,grd3,grd4
function setup() {
  createCanvas(800,480);
  
  grd1 = new Ground(displayWidth/2,displayHeight-20,displayWidth,40);
}

function draw() {
  background(200,200,200);  
  drawSprites();
}