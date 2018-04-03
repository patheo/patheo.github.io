for(i = 1 ; i < datamenu.length ; i++) {

     a = document.createElement('a');
     $(a).attr('href', "../../" + datamenu[i][1] + "/" + datamenu[0])
          .text(datamenu[i][0])
          .appendTo("#menu");
}
