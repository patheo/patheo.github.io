
var canvas;
const mappa = new Mappa('Leaflet');
//var data;
var scribble = new Scribble();

// Lets put all our map options in a single object
const options = {
     lat: 0,
     lng: 0,
     zoom: 4,
     style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {

}

function setup(){
     canvas = createCanvas(1000,700);
     // Create a tile map with the options declared
     myMap = mappa.tileMap(options);
     myMap.overlay(canvas);

     noFill();
}

function draw(){

     clear();

     for (i = 0 ; i <data.length ; i++) {

          var city = myMap.latLngToPixel(data[i].mapX, data[i].mapY);

          var test = "residence";
          //console.log(data[i].type);

          switch(data[i].type) {
               case "residence": stroke(255, 0, 0);break;
               case "creation": stroke(0, 255, 0);break;
               case "ecriture": stroke(0, 0, 255);break;
          }

          scribble.scribbleEllipse(city.x, city.y, 10, 10);

          if(dist(mouseX, mouseY, city.x, city.y) < 50) {

          }
     }

}

function mousePressed() {

     for (i = 0 ; i <2 ; i++) {
          var city = myMap.latLngToPixel(data[i].mapX, data[i].mapY);
          if(dist(mouseX, mouseY, city.x, city.y) < 10) {

               window.location = "/"+data[i].folder+"/index.html";
               break;

          }
     }
}
