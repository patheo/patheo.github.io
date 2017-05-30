/*
  * Fomratage automatique des div via Jquery.
*/

// Page d'acceuil
$("#loading")
    .css({"position":"absolute",
          "left":0,
          "top":0,
          "height":"100%",
          "width":"100%",
          "backgroundColor":"rgba(0, 0, 0, 0.9)",
          "zIndex": 30});

// Fomratage des objets fixes
$("#Met")
    .css({"position":"absolute",
          "left":20,
          "top":10})
    .attr({"class":"noeud"});
$("#MetVol")
    .css({"position":"absolute",
          "left":0,
          "top":0})
    .attr({"class":"noeud"});
$("#V")
    .css({"position":"absolute",
          "left":0,
          "top":0})
    .attr({"type":"text",
           "class":"dialVol",
           "data-displayInput":"false",
           "value":0});
$("#MetSpeed")
    .css({"position":"absolute",
          "left":20, "top":20,
          "width":"60px",
          "height":"60px"})
    .attr({"class":"noeud"});
$("#S")
    .css({"position":"absolute",
          "left":0,
          "top":0})
    .attr({"type":"text",
           "class":"dialVol",
           "data-displayInput":"false",
           "value":0});
$("#GMetro")
    .css({"position":"absolute",
          "left":50,
          "top":50})
    .attr({"class":"buttonFixe"});

$("#Gen")
    .css({"position":"absolute",
          "left":$(window).height()-780,
          "top":10})
    .attr({"class":"noeud"});
$("#GenVol")
    .css({"position":"absolute",
          "left":0,
          "top":0})
    .attr({"class":"noeud"});
$("#L")
    .css({"position":"absolute",
          "left":0,
          "top":0})
    .attr({"type":"text",
           "class":"dialVol",
           "data-displayInput":"false",
           "value":0});
$("#GHelp")
    .css({"position":"absolute",
          "left":50,
          "top":50})
    .attr({"class":"buttonFixe"});
$("#GClose")
    .css({"position":"absolute",
          "left":50,
          "top":50,
          "color": "white"})
    .attr({"class":"buttonFixe"})
    .hide("fast");

// FOrmatage de chaque noeud par boucle "for"

for(i = 0 ; i<(nbNoeud) ; i++){
  $("#" + i + "Vol")
      .css({"position":"absolute",
            "left":0,
            "top":0})
      .attr({"type":"text",
             "class":"dialVol",
             "data-displayInput":"false",
             "value":0});
  $("#" + i + "Mov")
      .css({"position":"absolute",
            "left":20, "top":20,
            "width":60, "height":60,
            "background-color":colorBgd[i]})
      .attr({"class":"noeudMvt"});
  $("#"  + i + "0")
      .css({"position":"absolute",
            "left":-40,
            "top":40,
            "background-color":colorBut[4]})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "1")
      .css({"position":"absolute",
            "left":-40,
            "top":0})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "2")
      .css({"position":"absolute",
            "left":-40,
            "top":-40})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "3")
      .css({"position":"absolute",
            "left":0,
            "top":-40})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "View")
      .css({"position":"absolute",
            "left":40,
            "top":-40})
      .attr({"class":"buttonFixe", "etat":0});
  $("#" + i)
      .attr({"class":"noeud",
            "data-x":150*i+250,
            "data-y":40,
            "mode": 0})
      .css({"position":"absolute",
            "left":0,
            "top":0,
            "-webkit-transform":"translate(" + $('#' + i).attr('data-x') + "px , " + $('#' + i).attr('data-y') + "px)",
                    "transform":"translate(" + $('#' + i).attr('data-x') + "px , " + $('#' + i).attr('data-y') + "px)"});
// Module d'effet
  $("#"  + i + "Effect")
      .css({"position":"absolute",
            "left":50,
            "top":50})
      .attr({"class":"effetGroup"})
      .hide("slow");

  $("#"  + i + "4Mov")
      .attr({"class":"effetMvt",
             "data-x":0,
             "data-y":190,
             "etat":0})
      .css({"position":"absolute",
             "left":0,
             "top":0,
             "width":40,
             "height":40,
             "-webkit-transform":"translate(" + $("#" + i + "4Mov").attr('data-x') + "px , " + $("#" + i + "4Mov").attr('data-y') + "px)",
                     "transform":"translate(" + $("#" + i + "4Mov").attr('data-x') + "px , " + $("#" + i + "4Mov").attr('data-y') + "px)"});

  $("#"  + i + "5Mov")
      .attr({"class":"effetMvt",
             "data-x":47.5,
             "data-y":190,
             "etat":0})
      .css({"position":"absolute",
            "left":0, "top":0,
            "width":40, "height":40,
            "-webkit-transform":"translate(" + $("#" + i + "5Mov").attr('data-x') + "px , " + $("#" + i + "5Mov").attr('data-y') + "px)",
                    "transform":"translate(" + $("#" + i + "5Mov").attr('data-x') + "px , " + $("#" + i + "5Mov").attr('data-y') + "px)"});

  $("#"  + i + "6Mov")
      .attr({"class":"effetMvt",
             "data-x":95,
             "data-y":190,
             "etat":0})
      .css({"position":"absolute",
            "left":0, "top":0,
            "width":40,
            "height":40,
            "-webkit-transform":"translate(" + $("#" + i + "6Mov").attr('data-x') + "px , " + $("#" + i + "6Mov").attr('data-y') + "px)",
                    "transform":"translate(" + $("#" + i + "6Mov").attr('data-x') + "px , " + $("#" + i + "6Mov").attr('data-y') + "px)"});

  $("#"  + i + "7Mov")
      .attr({"class":"effetMvt",
             "data-x":144.5,
             "data-y":190,
             "etat":0})
      .css({"position":"absolute",
            "left":0, "top":0,
            "width":40,
            "height":40,
            "-webkit-transform":"translate(" + $("#" + i + "7Mov").attr('data-x') + "px , " + $("#" + i + "7Mov").attr('data-y') + "px)",
                    "transform":"translate(" + $("#" + i + "7Mov").attr('data-x') + "px , " + $("#" + i + "7Mov").attr('data-y') + "px)"});

  $("#"  + i + "8Mov")
      .attr({"class":"effetMvt",
             "data-x":190,
             "data-y":190,
             "etat":0})
      .css({"position":"absolute",
            "left":0,
            "top":0,
            "width":40,
            "height":40,
            "-webkit-transform":"translate(" + $("#" + i + "8Mov").attr('data-x') + "px , " + $("#" + i + "8Mov").attr('data-y') + "px)",
                    "transform":"translate(" + $("#" + i + "8Mov").attr('data-x') + "px , " + $("#" + i + "8Mov").attr('data-y') + "px)"});
}
