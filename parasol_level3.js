(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("parasol_level3",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
            45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
            60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
            75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
            90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
            120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134,
            135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
            150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164],
         "height":10,
         "id":2,
         "name":"pozadina",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
            1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,
            0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
            0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
            0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
         "height":10,
         "id":4,
         "name":"platforma",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 2, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 11, 12, 13, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":6,
         "name":"bobby",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"bobby"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":8,
         "name":"Object Layer 1",
         "objects":[
                {
                 "class":"",
                 "gid":167,
                 "height":64,
                 "id":3,
                 "name":"kisobran_collect",
                 "rotation":0,
                 "visible":true,
                 "width":64,
                 "x":713.789,
                 "y":634.306
                }, 
                {
                 "class":"",
                 "gid":166,
                 "height":54,
                 "id":4,
                 "name":"kisobran_left",
                 "rotation":0,
                 "visible":true,
                 "width":57,
                 "x":587.316,
                 "y":620.41
                }, 
                {
                 "class":"",
                 "gid":165,
                 "height":54,
                 "id":5,
                 "name":"kisobran_right",
                 "rotation":0,
                 "visible":true,
                 "width":57,
                 "x":640.413,
                 "y":631.736
                }, 
                {
                 "class":"",
                 "gid":175,
                 "height":54,
                 "id":13,
                 "name":"magic",
                 "rotation":0,
                 "visible":true,
                 "width":57,
                 "x":590,
                 "y":573
                }, 
                {
                 "class":"",
                 "gid":175,
                 "height":54,
                 "id":14,
                 "name":"magicc",
                 "rotation":0,
                 "visible":true,
                 "width":57,
                 "x":525.5,
                 "y":565
                }, 
                {
                 "class":"",
                 "gid":176,
                 "height":64,
                 "id":15,
                 "name":"f1",
                 "rotation":0,
                 "visible":true,
                 "width":64,
                 "x":524,
                 "y":0
                }, 
                {
                 "class":"",
                 "gid":180,
                 "height":64,
                 "id":16,
                 "name":"f2",
                 "rotation":0,
                 "visible":true,
                 "width":64,
                 "x":681,
                 "y":64
                }, 
                {
                 "class":"",
                 "gid":178,
                 "height":58,
                 "id":17,
                 "name":"f3",
                 "rotation":0,
                 "visible":true,
                 "width":64,
                 "x":450,
                 "y":298
                }, 
                {
                 "class":"",
                 "gid":180,
                 "height":64,
                 "id":18,
                 "name":"f4",
                 "rotation":0,
                 "visible":true,
                 "width":64,
                 "x":704,
                 "y":384
                }, 
                {
                 "class":"",
                 "gid":14,
                 "height":31,
                 "id":19,
                 "name":"sunball",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":389,
                 "y":128
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 174, 173, 174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 168, 169, 168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":7,
         "name":"vjestica",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"vjestica"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":22,
         "name":"zujalica",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"fly"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":23,
         "name":"zujalica2",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"fly"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 171, 170, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":24,
         "name":"gljivar",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"gljivar"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 171, 170, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":25,
         "name":"gljivar2",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"gljivar"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }],
 "nextlayerid":27,
 "nextobjectid":20,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":64,
 "tilesets":[
        {
         "columns":1,
         "firstgid":1,
         "image":"maps\/parasol\/Parasol-Stars-Amiga-trucchi-e-codici-videogame.jpg",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"Parasol-Stars-Amiga-trucchi-e-codici-videogame",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":3,
         "firstgid":2,
         "image":"maps\/parasol\/bobby-right.png",
         "imageheight":128,
         "imagewidth":192,
         "margin":0,
         "name":"bobby-right",
         "spacing":0,
         "tilecount":6,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":3,
         "firstgid":8,
         "image":"maps\/parasol\/bobby-left.png",
         "imageheight":128,
         "imagewidth":192,
         "margin":0,
         "name":"bobby-left",
         "spacing":0,
         "tilecount":6,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":14,
         "image":"maps\/parasol\/sunball.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"sunball",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":15,
         "firstgid":15,
         "image":"maps\/parasol\/pozadina.png",
         "imageheight":640,
         "imagewidth":960,
         "margin":0,
         "name":"pozadina",
         "spacing":0,
         "tilecount":150,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":165,
         "image":"maps\/parasol\/kisobran_missile_right.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"kisobran_missile_right",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":166,
         "image":"maps\/parasol\/kisobran_missile_left.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"kisobran_missile_left",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":167,
         "image":"maps\/parasol\/kisobran_collect.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"kisobran_collect",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":2,
         "firstgid":168,
         "image":"maps\/parasol\/vjestica1.png",
         "imageheight":64,
         "imagewidth":128,
         "margin":0,
         "name":"vjestica1",
         "spacing":0,
         "tilecount":2,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":170,
         "image":"maps\/parasol\/gljivar.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"gljivar",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":171,
         "image":"maps\/parasol\/gljival+.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"gljival+",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":172,
         "image":"maps\/parasol\/fly.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"fly",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":2,
         "firstgid":173,
         "image":"maps\/parasol\/vjestica2.png",
         "imageheight":64,
         "imagewidth":128,
         "margin":0,
         "name":"vjestica2",
         "spacing":0,
         "tilecount":2,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":175,
         "image":"maps\/parasol\/magic-removebg-preview.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"magic-removebg-preview",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }, 
        {
         "columns":1,
         "firstgid":176,
         "image":"maps\/parasol\/fruit.png",
         "imageheight":374,
         "imagewidth":64,
         "margin":0,
         "name":"fruit",
         "spacing":0,
         "tilecount":5,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#cbc8c9"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":15
});