// Affectation des attributs des éléments HTML : Module métronome
$("#Met")
    .css({"position":"absolute", "left":20, "top":10})
    .attr({"class":"noeud"});
$("#MetVol")
    .css({"position":"absolute", "left":0, "top":0})
    .attr({"class":"noeud", "data-x":(200*Math.cos(2*Math.PI/nbNoeud*i)) + SizeX, "data-y":(200*Math.sin(2*Math.PI/nbNoeud*i)) + SizeY, "mode":0});
$("#V")
    .css({"position":"absolute", "left":0, "top":0})
    .attr({"type":"text", "class":"dialVol", "data-displayInput":"false", "value":0});
$("#MetSpeed")
    .css({"position":"absolute", "left":20, "top":20, "width":"60px", "height":"60px"})
    .attr({"class":"noeud", "data-x":(200*Math.cos(2*Math.PI/nbNoeud*i)) + SizeX, "data-y":(200*Math.sin(2*Math.PI/nbNoeud*i)) + SizeY, "mode":0});
$("#S")
    .css({"position":"absolute", "left":0, "top":0})
    .attr({"type":"text", "class":"dialVol", "data-displayInput":"false", "value":0});

var SizeY = ($(window).height()/8);
var SizeX = ($(window).width()/2);

for(i = 0 ; i<(nbNoeud) ; i++){
// Affectation des attributs des éléments HTML : Noeud Central
// $("<div></div>").attr("id",)
  $("#" + i)
      .css({"position":"absolute", "left":0, "top":0})
      .attr({"class":"noeud", "data-x":150*i+300, "data-y":30, "mode":0});
  $("#" + i + "Vol")
      .css({"position":"absolute", "left":0, "top":0})
      .attr({"type":"text", "class":"dialVol", "data-displayInput":"false", "value":0});
  $("#" + i + "Mov")
      .css({"position":"absolute", "left":20, "top":20, "width":60, "height":60, "background-color":colorBgd[i]})
      .attr({"class":"noeudMvt", "rotate":0});
  $("#"  + i + "0")
      .css({"position":"absolute", "left":-40, "top":40, "background-color":colorBut[4]})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "1")
      .css({"position":"absolute", "left":-40, "top":0})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "2")
      .css({"position":"absolute", "left":-40, "top":-40})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "3")
      .css({"position":"absolute", "left":0, "top":-40})
      .attr({"class":"buttonFixe"});
  $("#"  + i + "View")
      .css({"position":"absolute", "left":40, "top":-40})
      .attr({"class":"buttonFixe", "etat":0});
  $("#" + i).css({"-webkit-transform":"translate(" + $('#' + i).attr('data-x') + "px , " + $('#' + i).attr('data-y') + "px)",
                          "transform":"translate(" + $('#' + i).attr('data-x') + "px , " + $('#' + i).attr('data-y') + "px)"});
  $("#EfBgd"  + i)
      .css({"position" : "absolute", "left":-220, "top": 25, "background-color":colorBgd[i]})
      .attr({"class":"effetBgd"});
  // Affectation des attributs des éléments HTML : 4
  $("#"  + i + "Effect")
      .css({"position":"absolute", "left":50, "top":50})
      .attr({"class":"effetGroup"})
      .hide("slow");

// Affectation des attributs des éléments HTML : 0
  $("#"  + i + "4Mov")
      .css({"position":"absolute", "left":0, "top":0, "width":40, "height":40})
      .attr({"class":"effetMvt","data-x":0,"data-y":190,"etat":0});
  $("#"  + i + "4Mov").css({"-webkit-transform":"translate(" + $("#" + i + "4Mov").attr('data-x') + "px , " + $("#" + i + "4Mov").attr('data-y') + "px)",
                                    "transform":"translate(" + $("#" + i + "4Mov").attr('data-x') + "px , " + $("#" + i + "4Mov").attr('data-y') + "px)"});

// Affectation des attributs des éléments HTML : 1
  $("#"  + i + "5Mov")
      .css({"position":"absolute", "left":0, "top":0, "width":40, "height":40})
      .attr({"class":"effetMvt","data-x":47.5,"data-y":190,"etat":0});
  $("#"  + i + "5Mov").css({"-webkit-transform":"translate(" + $("#" + i + "5Mov").attr('data-x') + "px , " + $("#" + i + "5Mov").attr('data-y') + "px)",
                                    "transform":"translate(" + $("#" + i + "5Mov").attr('data-x') + "px , " + $("#" + i + "5Mov").attr('data-y') + "px)"});

// Affectation des attributs des éléments HTML : 2
  $("#"  + i + "6Mov")
      .css({"position":"absolute", "left":0, "top":0, "width":40, "height":40})
      .attr({"class":"effetMvt","data-x":95,"data-y":190,"etat":0});
  $("#"  + i + "6Mov").css({"-webkit-transform":"translate(" + $("#" + i + "6Mov").attr('data-x') + "px , " + $("#" + i + "6Mov").attr('data-y') + "px)",
                                    "transform":"translate(" + $("#" + i + "6Mov").attr('data-x') + "px , " + $("#" + i + "6Mov").attr('data-y') + "px)"});

// Affectation des attributs des éléments HTML : 3
  $("#"  + i + "7Mov")
      .css({"position":"absolute", "left":0, "top":0, "width":40, "height":40})
      .attr({"class":"effetMvt","data-x":144.5,"data-y":190, "etat":0});
  $("#"  + i + "7Mov").css({"-webkit-transform":"translate(" + $("#" + i + "7Mov").attr('data-x') + "px , " + $("#" + i + "7Mov").attr('data-y') + "px)",
                                    "transform":"translate(" + $("#" + i + "7Mov").attr('data-x') + "px , " + $("#" + i + "7Mov").attr('data-y') + "px)"});

// Affectation des attributs des éléments HTML : 4
  $("#"  + i + "8Mov")
      .css({"position":"absolute", "left":0, "top":0, "width":40, "height":40})
      .attr({"class":"effetMvt","data-x":190,"data-y":190, "etat":0});
  $("#"  + i + "8Mov").css({"-webkit-transform":"translate(" + $("#" + i + "8Mov").attr('data-x') + "px , " + $("#" + i + "8Mov").attr('data-y') + "px)",
                                    "transform":"translate(" + $("#" + i + "8Mov").attr('data-x') + "px , " + $("#" + i + "8Mov").attr('data-y') + "px)"});
}
