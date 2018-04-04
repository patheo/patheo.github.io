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
               'left' : data[i].mapX,
               'top' : data[i].mapY
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
                    "width": "70%",
                    "height": "500px",
                    "margin-left" : "15%",
                    "margin-right" : "15%"
               })
               .appendTo(dinfo)

     }

}

zoom($("#border"));

$(function(){
     $("#menu").load("../../Global/fr/menu.html" );
});

$("#plan").panzoom({
     minScale: 0.5,
     startTransform: 'scale(1)',
     increment : 0.01
});

 $("#plan").on('mousewheel.focal', function( e ) {
     e.preventDefault();
     var delta = e.delta || e.originalEvent.wheelDelta;
     var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
     $("#plan").panzoom('zoom', zoomOut, {
          animate: false,
          focal: e
     });
   });

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
