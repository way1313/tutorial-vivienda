function cambiarColor(nuevoColor) {
parrafo = document.getElementById('texto'); //Metodo: getElementById

parrafo.style.color = nuevoColor;

}

function cambiarLetra(transformar) {
    parrafo = document.getElementById('texto'); //Metodo: getElementById
    parrafo.style.texttransform = transformar;
    parrafo.style.fontsize = "25px";
}