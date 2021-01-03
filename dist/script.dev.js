"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Song =
/*#__PURE__*/
function () {
  function Song(group, url, tittle, listeners) {
    _classCallCheck(this, Song);

    this.goup = group;
    this.url = url;
    this.tittle = tittle;
    this.listeners = listeners;
  }

  _createClass(Song, [{
    key: "setItemLi",
    value: function setItemLi() {}
  }, {
    key: "setItemGroupName",
    value: function setItemGroupName(group, url) {}
  }, {
    key: "setItemSongTitle",
    value: function setItemSongTitle(title) {}
  }, {
    key: "setListeners",
    value: function setListeners(listeners) {}
  }, {
    key: "getNewElement",
    value: function getNewElement(group, url, title, listeners) {}
  }]);

  return Song;
}();

var loadSongs = function loadSongs() {};

var loadOverview = function loadOverview() {};

var loadTenListened = function loadTenListened() {};

var loadBiggest = function loadBiggest(e) {};
/* const init = ()=>{
 
    }


window.onload = init}
 */

/*
1. PONER BOTONES A LAS IMAGENES y CREAR 3 TEXTOS (modo lista ul>li)
2. DIVIDR LA PAGINA EN 2 BLOQUES Y AÑADIR UL AL BLOQUE DE JAVASCRIPT.
3. PINTAR CON JAVACRIPT LA LISTA
4. AÑADIR LISTENERS (BOTONES) A IMAGENES
5.AÑADIR LISTENERS A TEXTO


*/
//ACCEDIM AL JASON.


fetch('./music.json', {}).then(function (response) {
  return response.json();
}).then(function (resultat) {
  return main(resultat);
});
var arraySongs = [];

function main(dadaRebuda) {
  arraySongs = dadaRebuda;
  listener_estilos_imagenes();
  listener_estilos_texto();
}

function printLista(dada) {
  var listaSongs = document.getElementsByClassName("lista")[0];
  listaSongs.innerHTML = '';

  for (var i = 0; i < dada.length; i++) {
    var lista = document.createElement("li");
    lista.innerHTML = "<a class=\"group-name\"href=\"https://www.last.fm/music/Tame+Impala\">".concat(dada[i].artist.name, "</a><a class=\"song-title\">").concat(dada[i].name, "</a>\n        <div class=\"listeners\">-").concat(dada[i].listeners, "-</div>");
    listaSongs.appendChild(lista);
  }
}
/* 
const pintarLista = (lista) =>{
let musica = new Song();

} */

/* let titulo = document.getElementById("titulo"); */

/* CREACION LISTENERS DE LAS IMAGENES */


var listener_estilos_imagenes = function listener_estilos_imagenes() {
  var botonRock = document.getElementById("rock");
  botonRock.addEventListener("click", listaRock);
  var botonHiphop = document.getElementById("hiphop");
  botonHiphop.addEventListener("click", listaHiphop);
  var botonJazz = document.getElementById("jazz");
  botonJazz.addEventListener("click", listaJazz);
  var botonReggea = document.getElementById("reggea");
  botonReggea.addEventListener("click", listaReggae);
};
/* CREACION LISTENERS DE LAS TEXTO */


var listener_estilos_texto = function listener_estilos_texto() {
  var botonOverview = document.getElementsByClassName("overview")[0];
  botonOverview.addEventListener("click", listaOverview);
  var botonTop10 = document.getElementsByClassName("top10")[0];
  botonTop10.addEventListener("click", listaTop10);
  /*  let botonBiggest = document.getElementsByClassName("biggest")[0];
      botonBiggest.addEventListener("click",printLista); */
};
/* CAMBIO COLOR DEL TEXTO */


function cambioColorTitulo(nombre) {
  var overview = document.getElementsByClassName("overview")[0];
  var top10 = document.getElementsByClassName("top10")[0];
  var biggest = document.getElementsByClassName("biggest")[0];
  overview.id = "";
  top10.id = "";
  biggest.id = "";

  switch (nombre) {
    case "overview":
      overview.id = "apretado";
      break;

    case "top10":
      top10.id = "apretado";
      break;

    case "biggest":
      biggest.id = "apretado";
      break;
  }
}
/* CREACION DE LA LISTA FILTRADA IMAGENES (4 GENEROS)*/


function listaRock() {
  var arrayRock = [];

  for (var i = 0; i < arraySongs.length; i++) {
    var musicaRock = arraySongs[i];

    if (musicaRock.genre == 'rock') {
      arrayRock.push(musicaRock);
    }
  }

  printLista(arrayRock);
}

function listaHiphop() {
  var arrayHiphop = [];

  for (var i = 0; i < arraySongs.length; i++) {
    var musciaHiphop = arraySongs[i];

    if (musciaHiphop.genre == "hip-hop") {
      arrayHiphop.push(musciaHiphop);
    }
  }

  printLista(arrayHiphop);
}

function listaJazz() {
  var arrayJazz = [];

  for (var i = 0; i < arraySongs.length; i++) {
    var musciaJazz = arraySongs[i];

    if (musciaJazz.genre == "jazz") {
      arrayJazz.push(musciaJazz);
    }
  }

  printLista(arrayJazz);
}

function listaReggae() {
  var arrayReggae = [];

  for (var i = 0; i < arraySongs.length; i++) {
    var musciaReggae = arraySongs[i];

    if (musciaReggae.genre == "reggae") {
      arrayReggae.push(musciaReggae);
    }
  }

  printLista(arrayReggae);
}
/* CREACION DE LA LISTA FILTRADA TEXTO (3 BOTONES)*/


function listaOverview() {
  console.log(arraySongs);
  printLista(arraySongs);
}

function listaTop10() {
  var arrayOrdenado = ordenarMusicaListeners(arraySongs);
  arrayOrdenado = arrayOrdenado.slice(0, 10);
  printLista(arrayOrdenado);
}

function ordenarMusicaListeners(musiques) {
  var array = _toConsumableArray(musiques);

  return array.sort(function (a, b) {
    return b.listeners - a.listeners;
  });
}