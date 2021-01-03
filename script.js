class Song {
    constructor(group, url, tittle, listeners) {
        this.goup = group;
        this.url = url;
        this.tittle = tittle
        this.listeners = listeners;
    }

    setItemLi() {}
    setItemGroupName(group, url) {}
    setItemSongTitle(title) {}
    setListeners(listeners) {}
    getNewElement(group, url, title, listeners) {}

}

const loadSongs = () => {}

const loadOverview = () => {}

const loadTenListened = () => {

}

const loadBiggest = (e) => {

}

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

fetch('./music.json', {})
    .then(response => response.json())
    .then((resultat) => main(resultat))

let arraySongs = [];


function main(dadaRebuda) {
    arraySongs = dadaRebuda;

    listener_estilos_imagenes();
    listener_estilos_texto();
}


function printLista(dada) {
    let listaSongs = document.getElementsByClassName("lista")[0];
    listaSongs.innerHTML = '';
    for (let i = 0; i < dada.length; i++) {
        let lista = document.createElement("li");
        lista.innerHTML =
            `<a class="group-name"href="https://www.last.fm/music/Tame+Impala">${dada[i].artist.name}</a><a class="song-title">${dada[i].name}</a>
        <div class="listeners">-${dada[i].listeners}-</div>`;
        listaSongs.appendChild(lista);
    }

}
/* 
const pintarLista = (lista) =>{
let musica = new Song();

} */

/* let titulo = document.getElementById("titulo"); */


/* CREACION LISTENERS DE LAS IMAGENES */

const listener_estilos_imagenes = () => {

    let botonRock = document.getElementById("rock");
    botonRock.addEventListener("click", listaRock);


    let botonHiphop = document.getElementById("hiphop");
    botonHiphop.addEventListener("click", listaHiphop);

    let botonJazz = document.getElementById("jazz");
    botonJazz.addEventListener("click", listaJazz);

    let botonReggea = document.getElementById("reggea");
    botonReggea.addEventListener("click", listaReggae);
}

/* CREACION LISTENERS DE LAS TEXTO */

const listener_estilos_texto = () => {
    let botonOverview = document.getElementsByClassName("overview")[0];
    botonOverview.addEventListener("click", listaOverview);

    let botonTop10 = document.getElementsByClassName("top10")[0];
    botonTop10.addEventListener("click",listaTop10);

/*  let botonBiggest = document.getElementsByClassName("biggest")[0];
    botonBiggest.addEventListener("click",printLista); */ 
}

/* CAMBIO COLOR DEL TEXTO */

function cambioColorTitulo(nombre) {
    let overview = document.getElementsByClassName("overview")[0];
    let top10 = document.getElementsByClassName("top10")[0];
    let biggest = document.getElementsByClassName("biggest")[0];
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
    let arrayRock = [];
    for (let i = 0; i < arraySongs.length; i++) {
        let musicaRock = arraySongs[i];
        if (musicaRock.genre == 'rock') {
            arrayRock.push(musicaRock);
        }
    }
    printLista(arrayRock);
}

function listaHiphop() {
    let arrayHiphop = [];
    for (let i = 0; i < arraySongs.length; i++) {
        let musciaHiphop = arraySongs[i];
        if (musciaHiphop.genre == "hip-hop") {
            arrayHiphop.push(musciaHiphop);
        }
    }
    printLista(arrayHiphop);

}

function listaJazz() {
    let arrayJazz = [];

    for (let i = 0; i < arraySongs.length; i++) {
        let musciaJazz = arraySongs[i];
        if (musciaJazz.genre == "jazz") {
            arrayJazz.push(musciaJazz);
        }
    }

    printLista(arrayJazz);

}

function listaReggae() {
    let arrayReggae = [];

    for (let i = 0; i < arraySongs.length; i++) {
        let musciaReggae = arraySongs[i];
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
let arrayOrdenado = ordenarMusicaListeners(arraySongs);
arrayOrdenado = arrayOrdenado.slice(0,10);
printLista(arrayOrdenado);

}

function ordenarMusicaListeners(musiques) {
let array=[...musiques]
    return array.sort((a, b) => {
        
    return b.listeners -  a.listeners 
    });
}