function zoom(parent) {

     var zoomContent = $(document.createElement('div'));
     $(zoomContent)
                    .css("background", "rgba(255, 255, 255, 0.5)")
                    .appendTo(parent)

     var array = $(document.createElement('div'));
     $(array)
               .css("display", "flex")
               .appendTo(zoomContent)

     $(document.createElement('h3'))
               .css("width", "100%")
               .click(zoomOut())
               .text("-")
               .appendTo(array)

     $(document.createElement('h3'))
               .css("width", "100%")
               .text("Zoom")
               .appendTo(array)

     $(document.createElement('h3'))
               .css("width", "100%")
               .click(zoomIn())
               .text("+")
               .appendTo(array)

     $(document.createElement('h3'))
               .css({"font-size" : "10px",
                    "text-align" : "center",
                    "margin" : "5%",
                    "margin-top" : "-10px",
                    "margin-bottom" : "100px"})
               .text("Pour zoomer vous pouvez aussi utliser la molette de la souris.")
               .appendTo(zoomContent)


}
