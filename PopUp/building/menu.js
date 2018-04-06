var data = [["La Carte", "The Map", "page", "../../WorldMap"],
            ["Le spectacle", "The Show", "page", "../../Show"],
            ["Pro", "Pro", "secretLink"],
            ["Contact", "Contact", "page", "../../Contact"]
          ];

for(i = 0 ; i < data.length ; i++) {

     var title;
     if(lang == "fr") {title = data[i][0]};
     if(lang == "eng") {title = data[i][1]};

     switch(data[i][2]) {
          case "page":
               $(document.createElement('a'))
                    .attr('href', data[i][3] + "/" + lang)
                    .text(title)
                    .appendTo("#menu");
               break;

          case "secretLink":
               $(document.createElement('a'))
                    .text(title)
                    .click(function() {
                         var form = prompt("Merci d'entrer votre mot de passe", "mot de passe");
                         if(form != null || form != "") {
                              window.open('/pro/' + form +'.pdf');
                         }
                    })
               .appendTo("#menu");
               break;
     }
}

function page() {

     $(document.createElement('a')).attr('href', "../../" + datamenu[i][1] + "/" + datamenu[0])
          .text(datamenu[i][0])
          .appendTo("#menu");

}

function secretLink() {
     $(document.createElement('a')).attr('href', "../../" + datamenu[i][1] + "/" + datamenu[0])
          .text(datamenu[i][0])
          .click(function() {
               var form = prompt("Merci d'entrer votre mot de passe", "mot de passe");
               if(form != null || form != "") {
                    window.open('../../pro/' + form +'.pdf');
               }
          })
          .appendTo("#menu");
}
