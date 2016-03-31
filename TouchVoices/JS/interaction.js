interact('.noeudMvt')
  .draggable({
    inertia: true,
    autoScroll: false,

    onmove: function (event) {
      var target = event.target,
          parent = target.parentNode,
          x = (parseFloat(parent.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(parent.getAttribute('data-y')) || 0) + event.dy;

      if(x > 0 && x < (windowWidth-100) && y > 0 && y < (windowHeight-100)){

        parent.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';

        parent.setAttribute('data-x', x);
        parent.setAttribute('data-y', y);

        effetFaust.setValue("/0x00/" + "MovX" + target.getAttribute('id').substr(0,1), (x + 50 - (windowWidth/2))/50);
        effetFaust.setValue("/0x00/" + "MovY" + target.getAttribute('id').substr(0,1), ((y + 50 - (windowHeight/2))/50)*(-1));
        console.log("MovX" + target.getAttribute('id').substr(0,1) + " " + (x + 50 - (windowWidth/2))/50
            + " MovY" + target.getAttribute('id').substr(0,1) + " " + ((y + 50 - (windowHeight/2))/50)*(-1));
        }
    }
  })
  .on('down', function (event) {
    var target = event.target;
    var parent = target.parentNode;
    for(i=0; i<nbNoeud; i++){
      $("#" + i).css("zIndex" , 0);
    }
    $("#" + parent.getAttribute('id')).css("zIndex" , 10);
  })

interact('.buttonFixe')
  .on('tap', function (event) {
    var target = event.target,
        etat = (parseInt(target.getAttribute('etat'))+1)%2,
        noeudAct = target.getAttribute('id').substr(0, 1),
        buttonAct = target.getAttribute('id').substr(1, 1);

    if(buttonAct == "V"){
      if(etat == 0){
        $("#" + noeudAct + "Effect").fadeOut("slow");
        $("#" + target.getAttribute('id')).css("backgroundColor" , colorButReset);
      }else{
        $("#" + noeudAct + "Effect").fadeIn("slow");
        $("#" + target.getAttribute('id')).css("backgroundColor" , "rgba(255, 0, 125, 0.8)");
      }
      event.currentTarget.setAttribute('etat', etat);

    } else if(buttonAct == "M"){
      effetFaust.setValue("/0x00/VolV",  0);

    } else if(buttonAct == "H"){
      $("#GClose").fadeIn("slow");
      $("#loading").fadeIn("slow");

    } else if(buttonAct == "C"){
      $("#loading").fadeOut("slow");

    } else {
      for (i = 0 ; i < 4 ; i++){
        $("#" + noeudAct + i).css("backgroundColor" , colorButReset);
      }
      $("#" + noeudAct + buttonAct).css("backgroundColor", colorBut[buttonAct]);
      $("#" + noeudAct).attr("mode" , (buttonAct));
      effetFaust.setValue("/0x00/" + "opt" + noeudAct, buttonAct);
      console.log("opt" + noeudAct + " " + (parseInt(buttonAct)))
    }
    event.currentTarget.setAttribute('etat', etat);
  })

interact('.effetMvt')
  .draggable({
    inertia: true,
    autoScroll: false,

    onmove: function (event) {
      var target = event.target,
          noeudAct = parseInt(target.getAttribute('id').substr(0, 1)),
          buttonAct = parseInt(target.getAttribute('id').substr(1, 1)),
          x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
          y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    if(x > 0 && x < 190 && y > 0 && y < 190){

      target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
      effetFaust.setValue("/0x00/" + effet[buttonAct]+ "X" + noeudAct, x);
      effetFaust.setValue("/0x00/" + effet[buttonAct]+ "Y" + noeudAct, (189-y));
      console.log(
        effet[buttonAct]+ "X" + noeudAct + " " + x + " "
      + effet[buttonAct]+ "Y" + noeudAct + " " + (189-y));
       }
    }
  })
  .on('tap', function (event) {
    var target = event.target,
        noeudAct = parseInt(target.getAttribute('id').substr(0, 1)),
        buttonAct = parseInt(target.getAttribute('id').substr(1, 1)),
        etat = (parseInt(target.getAttribute('etat'))+1)%2;
    if(etat == 0){
      $("#" + target.getAttribute('id')).css("backgroundColor", colorButReset);
    } else {
      $("#" + target.getAttribute('id')).css("backgroundColor", colorBgd[noeudAct]);
    }
    effetFaust.setValue("/0x00/" + effet[buttonAct] + "B" + noeudAct, etat);
    console.log(effet[buttonAct]+ "B" + noeudAct + " " + etat);
    event.currentTarget.setAttribute('etat', etat);
  })
