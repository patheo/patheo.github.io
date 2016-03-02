var alphaEvolutif = 0;
var chargement = 0;
var CentreL = 0;

function setup(){
  var myCanvas = createCanvas(windowWidth+500, windowHeight+500);
  myCanvas.parent('fondEcran');
  background(0);
}

function draw(){
  fill("rgba(50, 0, 50, 0.3)");
  rect(0,0, windowWidth+500, windowHeight+500);
  frameRate(30);

  if (chargement < 16 && chargement > -1) {
    chargement++;
  } else if (chargement > 15) {
    audioReady();
    chargement = -10;
  }

  // Cercle autour des noeuds
  for(i = 0 ; i < nbNoeud ; i++){
    var posRefX = parseFloat($("#" + i).attr('data-x'))+50;
    var posRefY = parseFloat($("#" + i).attr('data-y'))+50;
    var color = colorBut[$("#"+ i).attr('mode')];
    var volume = Math.abs(effetFaust.getValue("/0x00/audioLevel" + i));

    noStroke();

    fill(color);
    ellipse(posRefX, posRefY, (100+volume*5),(100+volume*5));
  }
  // Cercle autour de la tête
  strokeWeight(1);
  noFill();
  stroke('rgba(255, 255, 255, 0.8)');

  if(Math.abs(effetFaust.getValue("/0x00/metLevel")) < 0.1){
    CentreL = 0;
  } else {
    ellipse(windowWidth/2, windowHeight/2, CentreL, CentreL);
    CentreL = CentreL+20;
  }

  // Centre
  frameRate(10);
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
  resizeCanvas(windowWidth+500, windowHeight+500);
}
