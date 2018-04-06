/*--------- FONCTION DE TRAVAIL --------------------*/
var lang = "fr";


/*--------- CREATION DU GLOBLE ---------------------*/
var options = {
     sky: false,
     atmosphere: true,
     dragging: true,
     tilting: false,
     zooming: true,
     center: [46.8011, 8.2266],
     zoom: 2
};

var earth = new WE.map('container', options);

var toner = WE.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png');
toner.addTo(earth);


/*--------- CREATION DES PICKS POUR LA CARTE -------*/

$.ajax({
     url: "PopUp/pages",
     success: function(path){
          $(path).find("a").each(function(d){
               var p = $(this).attr("href")
               $.getJSON("../../" + p + "data.json", function(data) {

                    var pick;
                    var div = document.createElement('div');

                    switch (data.type) {

                         case "work":
                              pick = '../src/PickGreen.png';

                              $(div).append(
                                   $(document.createElement('a'))
                                        .text(data.nom)
                                        .attr("href", "../../" + p + lang)
                              );
                              break;

                         case "passed":
                              pick = '../src/PickRed.png';
                              break;

                         case "inprogress":
                              pick = '../src/PickViolet.png';
                              break;

                         case "future":
                              pick = '../src/PickYellow.png';

                              $(div).append(
                                        $(document.createElement('a'))
                                             .text(data.nom)
                                   )
                                   .append(
                                        $(document.createElement('div'))
                                             .text(data.date)
                                   )
                              break;

                         case "yourPopUp":
                              pick = '../src/PickGrey.png';
                              break;

                         default:
                    }

                    var marker = WE.marker( [ data.lat, data.long ], pick, 28, 50).addTo(earth);

                    marker.bindPopup($(div).prop("outerHTML"), {maxWidth: 150, closeButton: true});

                    $('.we-pm-icon').each(function(){
                         $(this)
                              .css("transform-origin", "50% bottom")
                              .css("transform", "rotate(" + (Math.random() * 360) + "deg)")
                              .click(function(){
                                   $('.we-pm-icon').css('z-index', 10);
                                   $('.we-pp').css('opacity', 0);
                                   $('.we-pp').css('visibilty', 'hidden');
                                   $(this).parent().children('.we-pp').css('opacity', 1);
                                   $(this).parent().children('.we-pp').css('visibility', 'visible');
                                   $(this).css('z-index', 100)
                         })

                    })

               })
          })



          $('.we-pm-icon').each(function(){

               console.log("ok");
               $(this).click(function(){
                         $('.we-pm-icon').css('z-index', 10);
                         $('.we-pp').css('opacity', 0);
                         $('.we-pp').css('visibilty', 'hidden');
                         $(this).parent().children('.we-pp').css('opacity', 1);
                         $(this).parent().children('.we-pp').css('visibility', 'visible');
                         $(this).css('z-index', 100)
               })

          })
     }
})

// Modification des paramêtre des picks

/*
Outils pour webglearth

Pour effacer une popUp, il faut passer l'opacity à 0.
*/


// Modification de la fonction de click des icons


$("#legende").appendTo("#boder");

function zoomIn() {

     earth.setZoom(earth.getZoom() + 0.5);

}

function zoomOut() {

     earth.setZoom(earth.getZoom() - 0.5);

}

function resetZoom() {

     earth.setZoom(2);


}

zoom($("body"), lang);
