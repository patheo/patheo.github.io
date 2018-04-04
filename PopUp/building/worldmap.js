


/*
Outils pour webglearth

Pour effacer une popUp, il faut passer l'opacity à 0.
*/
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

for(i = 0 ; i < data.length ; i++) {

     var pick;

     switch (data[i].type) {
          case "ecriture": pick = '../src/PickYellow.png'; break;
          case "residence": pick = '../src/PickGreen.png'; break;
          case "spectacle": pick = '../src/PickRed.png'; break;
          case "avenir": pick = '../src/PickViolet.png'; break;
          case "question": pick = '../src/PickGrey.png'; break;
          default:

     }
     var marker = WE.marker( [ data[i].mapX, data[i].mapY ], pick, 28, 50).addTo(earth);
     //marker.bindPopup("<b>" + data[i].nom + "</b><br>" + data[i].date, {maxWidth: 150, closeButton: true});

     var d = document.createElement('a');
     $(d).text(data[i].nom)

          .attr('href', "../" + data[i].folder);

     marker.bindPopup($(d).prop("outerHTML"), {maxWidth: 150, closeButton: true});

}

// Modification de la fonction de click des icons
$('.we-pm-icon').each(function(){

     $(this).click(function(){
          $('.we-pm-icon').css('z-index', 10);
          $('.we-pp').css('opacity', 0);
          $('.we-pp').css('visibilty', 'hidden');
          $(this).parent().children('.we-pp').css('opacity', 1);
          $(this).parent().children('.we-pp').css('visibility', 'visible');
          $(this).css('z-index', 100)
     });

});

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

zoom($("body"));
