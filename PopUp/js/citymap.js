var img, pg, pgText, canvas;
var scribble = new Scribble();
var data;
var mouseDist = 50;
var article = false;

function preload() {
     img = loadImage('plan.jpg');
}

function setup() {

     //$("img").fadeOut("fast");
     canvas = createCanvas(1000, 700);
     canvas.position(0, 50);
     canvas.style('z-index', '-1');

     pgText = createGraphics(width, height);
     pg = createGraphics(width, height);

     pg.tint(255, 20);
     pg.image(img, 0, 0, width, height);

     noFill();

}

function draw() {

     // Dessin de la carte avec un fond alpha
     image(pg, 0, 0);

     // Cercle autours des éléments importants
     for( i = 0 ; i < data.length ; i++) {

          if(dist(data[i].mapX, data[i].mapY, mouseX, mouseY) < mouseDist){
               stroke(0);
               scribble.scribbleEllipse(data[i].mapX,
                                        data[i].mapY,
                                        data[i].diam + cos(frameCount/20.)*4,
                                        data[i].diam + cos(frameCount/19.)*4);
          }

     }

     if(article) {

          //fill("rgba(255, 255, 255, 0.8)")
          noStroke();
          fill("rgba(255, 255, 255, .9)");
          rect(100, 50, 800, 600);
          stroke(0);
          scribble.scribbleRect(500, 350, 800, 600);

     }
}

function mousePressed() {
     for( i = 0 ; i < data.length ; i++) {

          if(dist(data[i].mapX, data[i].mapY, mouseX, mouseY) < mouseDist){
               $("#titre").text(data[i].titre);
               $("#texte").text(data[i].description);
               if(data[i].image) {
                    $("#image").append("<img id='img' src=" + data[i].image + " style='width:100%'></img>");
               }
               if(data[i].video) {
                    $("#image").append("<iframe id='img' width='420' height='315' src=" + data[i].video +
                    "allowfullscreen></iframe>");
               }


               article = true;
               $("#info").fadeIn("slow");

               noLoop();
               break;
          }

     }

}

function closeInfo() {

     $("#info").fadeOut("slow");
     $('#img').remove();
     article = false;
     loop();

}
