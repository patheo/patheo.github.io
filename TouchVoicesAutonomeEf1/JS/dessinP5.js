var alphaEvolutif = 0;

function setup(){
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('fondEcran');
  background(0);
}

function draw(){
  fill(bgd_P5);
  rect(0,0, windowWidth, windowHeight);
  frameRate(30);
/*
  // Centre
  strokeWeight(1);
  stroke('rgba(255, 255, 255, 0.8)');
  line((windowWidth-250)/2+250, windowHeight/2-50, (windowWidth-250)/2+250, windowHeight/2+50);
  line((windowWidth-250)/2+200, windowHeight/2, (windowWidth-250)/2+300, windowHeight/2);
*/
  // Cercle
  for(i = 0 ; i < nbNoeud ; i++){
    var posRefX = parseFloat($("#" + i).attr('data-x'))+50;
    var posRefY = parseFloat($("#" + i).attr('data-y'))+50;
    var alphaRef = parseFloat($("#" + i + "Vol").attr("value"))/100;

    noStroke();

    fill(colorBut[($("#"+ i).attr('mode'))]);
    ellipse(posRefX+(60*Math.sin(2*Math.PI*mouvement)),posRefY+(60*Math.cos(2*Math.PI*mouvement)),6,6);
  }
  frameRate(10);
  strokeWeight(1);
  stroke('rgba(255, 255, 255, 0.8)');
  // Convert polar to cartesian
  var x1 = (Math.random()*vol) * cos(theta+HALF_PI);
  var y1 = (Math.random()*vol) * sin(theta+HALF_PI);
  line((windowWidth)/2, windowHeight/2, (windowWidth)/2+x1, windowHeight/2+y1);
  var x2 = (Math.random()*vol) * cos(theta+PI);
  var y2 = (Math.random()*vol) * sin(theta+PI);
  line((windowWidth)/2, windowHeight/2, (windowWidth)/2+x2, windowHeight/2+y2);
  var x3 = (Math.random()*vol) * cos(theta+PI+HALF_PI);
  var y3 = (Math.random()*vol) * sin(theta+PI+HALF_PI);
  line((windowWidth)/2, windowHeight/2, (windowWidth)/2+x3, windowHeight/2+y3);
  var x4 = (Math.random()*vol) * cos(theta);
  var y4 = (Math.random()*vol) * sin(theta);
  line((windowWidth)/2, windowHeight/2, (windowWidth)/2+x4, windowHeight/2+y4);

  mouvement = mouvement+0.05;
  theta = theta+0.05;
  //alphaEvolutif = alphaEvolutif+0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
