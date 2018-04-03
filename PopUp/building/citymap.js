var plan = document.createElement('div');
var dleg = document.createElement('div');
var img = document.createElement('img');

$(plan).css({
          'position' : 'absolute',

          'width' : '100%',
          'padding-top' : '70%',
     })
     .attr({
          'id' : 'plan'
     })
     .appendTo('#container')

$(img).css({

          'position' : 'absolute',
          'height' : '100%',
          'width' : '100%',
          'top' : 0,
          'left' : 0

     })
     .attr({
          'src' : "../src/plan.jpg"
     })
     .appendTo(plan)
     .click(function(){
          for(i = 0 ; i < data.length ; i++) {
               $("#" + data[i].id + "info").fadeOut("slow");
          }
     })

var n = document.createElement('h2');
$(n).text("Legende").appendTo(dleg);


for (i = 0 ; i < data.length ; i++) {

     // Create des rectangle sur le plan
     var drect = document.createElement('div');
     var rect = document.createElement('div');

     $(rect).attr({
               "src" : "../../Global/src/rect.png",
               "id" : data[i].id + 'rect',
               "class" : "rect"
          })
          .css({
               'display' : 'none'
          })
          .appendTo(drect);

     $(drect).mouseenter(function() {
               $("#" + $(this).attr("perfId") + "rect").css("transform", "rotate(" + (Math.random() * 10 -5) + "deg )");
               $("#" + $(this).attr("perfId") + "rect").fadeIn("slow");
          })
          .mouseleave(function() { $("#" + $(this).attr("perfId") + "rect").fadeOut("slow") })
          .click(function() {
               $("#" + $(this).attr("perfId") + "info").css("transform", "rotate(" + (Math.random() * 6 -3) + "deg )");
               $("#" + $(this).attr("perfId") + "info").fadeIn("slow");
          })
          .css({
               'width' : data[i].largeur,
               'height' : data[i].hauteur,
               'position' : 'absolute',
               'left' : data[i].mapX - data[i].largeur/2,
               'top' : data[i].mapY - data[i].hauteur/2
          })
          .attr("perfId" , data[i].id)
          .attr("class", "drawbox")
          .appendTo(plan);

     // création du texte de légende

     var dtext = document.createElement('div');

     $(dtext).text(data[i].accroche)
          .attr("perfId", data[i].id)
          .mouseenter(function() { $("#" + $(this).attr("perfId") + "rect").fadeIn("slow") })
          .mouseleave(function() { $("#" + $(this).attr("perfId") + "rect").fadeOut("slow") })
          .click(function() {
               $("#" + $(this).attr("perfId") + "info").css("transform", "rotate(" + (Math.random() * 6 - 3) + "deg )");
               $($(this).attr("perfId") + "info").fadeIn("slow") ;
          })
          .css({
               'text-align' : 'center',
               'margin' : '10px'
          })
          .appendTo($("#border"));

     // création des div pour chaque performance
     var dinfo = document.createElement('div');
     $(dinfo)
          .attr("id" , data[i].id + "info")
          .attr("class", "divInside")
          .appendTo("#container")

     $(document.createElement('h2'))
          .text(data[i].titre)

          .appendTo(dinfo)

     $(document.createElement('div'))
          .text(data[i].description)
          .css({
               "text-align": "center",
          })
          .appendTo(dinfo)

     if(data[i].image) {
          $(document.createElement('img'))
               .attr("src", "../src/" + data[i].image)
               .css({
                    "width": "70%",
                    //"max-width": "500px",
                    "margin-top" : "10px",
                    "margin-left" : "15%",
                    "margin-right" : "15%"
               })
               .appendTo(dinfo)
     }
     if(data[i].video) {
          $(document.createElement('iframe'))
               .attr("src", data[i].video)
               .css({
                    "width": "50%",
                    "height": "500px",
                    "margin": "5%"
               })
               .appendTo(dinfo)

     }

}

/*

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
                    "></iframe>");
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
*/
