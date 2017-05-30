// Définition de l'objet texte
function Texte() {

  this.phrase = "";
  this.angle = 0;
  this.position = 0;

}

var texte = new Array("Je t'aime !!", "Mon amour...", "Tu es magnifique !", "Beauté", "Angélique", "Femme de ma vie", "Amour...", "Être formidable");

function setup() {

  var myCanvas = createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();


}

function draw() {

  background(0, 5);

  if(random(100) < 10) {
    push();
    translate(random(100, windowWidth-100), random(100, windowHeight-100));
    //translate(windowWidth/2, windowHeight/2);
    rotate(random(-0.5, 0.5));
    textAlign(CENTER);
    //console.log("Bonjour");
    textSize(random(20, 40));
    text(texte[parseInt(random(texte.length))], 0, 0);
    pop();

  }

}

function windowResized() {

  setup();

}
