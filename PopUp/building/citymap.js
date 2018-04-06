var dleg = document.createElement('div');
var img = document.createElement('img');

/*------- FONCTION RESSOURCE ----------*/
function zoomIn() {
     for(i = 0 ; i < 20 ; i++){
          $("#plan").panzoom('zoom', false, {
               animate: true
          });
     }
}

function zoomOut() {
     for(i = 0 ; i < 20 ; i++){
          $("#plan").panzoom('zoom', true, {
               animate: true
          });
     }
}


/*------- INITIALISATION ----------*/

// Création du bouton de zoom
zoom($("#border"), lang);


// Mise en place de tout le particulier
$.getJSON("../data.json", function(data) {

     // Création du div plan qui fera zoom et déplacement
     $(document.createElement('div'))
          .css({
               'position' : 'absolute',
               'width' : '100%',
               'padding-top' : '70%'
          })
          .attr({
               'id' : 'plan'
          })
          .appendTo('#container')
          .panzoom({
               minScale: 0.5,
               startTransform: 'scale(1)',
               increment : 0.01
          })
          .on('mousewheel.focal', function( e ) {
               e.preventDefault();
               var delta = e.delta || e.originalEvent.wheelDelta;
               var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
               $("#plan").panzoom('zoom', zoomOut, {
                    animate: false,
                    focal: e
               })
          })

     // Insertion de l'image du plan
     $(document.createElement('img'))
          .css({
               'position' : 'absolute',
               'height' : '100%',
               'width' : '100%',
               'top' : 0,
               'left' : 0
          })
          .attr('src' , '../src/plan.jpg')
          .appendTo($("#plan"))
          .click(function(){
               for(i = 0 ; i < data.performance.length ; i++) {
                    $("#" + data.performance[i].id + "info").fadeOut("slow");
               }
          })

     // Création des éléments par performances
     for (i = 0 ; i < data.performance.length ; i++) {

          // création de la couche du rectangle
          $(document.createElement('div'))
               .attr({
                    "perfId" : data.performance[i].id,
                    "class" : "rect",
                    "id" : data.performance[i].id + "rect"
               })
               .attr("class", "rect")
               .css({
                    'width' : data.performance[i].width,
                    'height' : data.performance[i].height,
                    'position' : 'absolute',
                    'left' : data.performance[i].mapX,
                    'top' : data.performance[i].mapY
               })
               .mouseenter( function() {
                    $(this).css("transform", "rotate(" + (Math.random() * 10 -5) + "deg )");
                    $(this).animate({'opacity': 1}, 'slow');
                    //$("#" + $(this).attr("perfId") + "rect").fadeIn("slow");
               })
               .mouseleave(function() { $(this).animate({'opacity': 0}, 'slow') } )
               .click(function() {
                    $("#" + $(this).attr("perfId") + "info").css("transform", "rotate(" + (Math.random() * 6 -3) + "deg )");
                    $("#" + $(this).attr("perfId") + "info").fadeIn("slow");
               })
               .appendTo($('#plan'))

          // Création des légendes clickable
          $(document.createElement('h3')).text(data.performance[i].heure).appendTo($("#border"))

          var indice;
          if(lang == "fr") {indice = data.performance[i].indiceFr};
          if(lang == "eng") {indice = data.performance[i].indiceEng};

          $(document.createElement('div'))
               .text(indice)
               .attr("perfId", data.performance[i].id)
               .css({
                    'text-align' : 'center',
                    'margin' : '10px'
               })
               .mouseenter(function() { $("#" + $(this).attr("perfId") + "rect").animate({'opacity': 1}, 'slow')})
               .mouseleave(function() { $("#" + $(this).attr("perfId") + "rect").animate({'opacity': 0}, 'slow') })
               .click(function() {
                    $("#" + $(this).attr("perfId") + "info").css("transform", "rotate(" + (Math.random() * 6 -3) + "deg )");
                    $("#" + $(this).attr("perfId") + "info").fadeIn("slow");
               })
               .appendTo($("#border"));

          // Créaion des Div d'info

          var desc;
          if(lang == "fr") {desc = data.performance[i].descriptionFr};
          if(lang == "eng") {desc = data.performance[i].descriptionEng};

          $(document.createElement('div'))
               .attr("id" , data.performance[i].id + "info")
               .attr("class", "divInside")
               .appendTo("#container")
               .append($(document.createElement('h2')).text(data.performance[i].nom))
               .append($(document.createElement('div')).text(desc))

          if(data.performance[i].image) {
               $(document.createElement('img'))
                    .attr("src", "../src/" + data.performance[i].id + ".jpg")
                    .css({
                         "width": "70%",
                         "margin-top" : "10px",
                         "margin-left" : "15%",
                         "margin-right" : "15%"
                    })
                    .appendTo($("#" + data.performance[i].id + "info"))
          }
          if(data.performance[i].video) {
               $(document.createElement('iframe'))
                    .attr("src", data[i].video)
                    .css({
                         "width": "70%",
                         "height": "500px",
                         "margin-left" : "15%",
                         "margin-right" : "15%"
                    })
                    .appendTo($(data.performance[i].id + "info"))

          }
     }
})
