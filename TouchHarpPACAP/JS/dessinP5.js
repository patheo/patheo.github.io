/*
  * Fond d'écran de l'appliction géré via P5.js
*/

'use strict'

var chargement = 0;
var CentreL = 0;

// Affichage des cercles autour des noeuds en fonction de l'état et du volume du noeud
function cercleVolume(){
  for(i = 0 ; i < nbNoeud ; i++){
    var posRefX = parseFloat($("#" + i).attr('data-x'))+50;
    var posRefY = parseFloat($("#" + i).attr('data-y'))+50;
    var color = colorBut[$("#"+ i).attr('mode')];
    var volume = Math.abs(effetFaust.getValue("/0x00/audioLevel" + i));

    noStroke();

    fill(color);
    ellipse(posRefX, posRefY, (100+volume*20),(100+volume*20));
  }
}

// Affichage du centre de la fenêtre en fonction du volume du métronome
function centre(){
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
}

/* Fonction de base de l'API P5.js */

//Fnitialisation
function setup(){
  var myCanvas = createCanvas(windowWidth+500, windowHeight+500);
  myCanvas.parent('fondEcran');
  background(0);
}

// Fonction a executer à chaque frame
function draw(){
  fill("rgba(50, 0, 50, 0.3)");
  rect(0,0, windowWidth+500, windowHeight+500);
  frameRate(30);

  //Le Asmjs étant long a charger, les images se ficge à l'initialisation.
  //Une fois que les images deviennent fluides, la fonction audioReady est déclenché
  if (chargement < 16 && chargement > -1) {
      chargement++;
    } else if (chargement > 15) {
      audioReady();
      chargement = -10;
    }

  cercleVolume();
  centre();

}

// Fonction en cas de changement de taille de fenêtre.
function windowResized() {
  resizeCanvas(windowWidth+500, windowHeight+500);
}
