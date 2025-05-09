
import { Longitud,Posicion,contienePalabra } from "./02-Text.js";

document.addEventListener("DOMContentLoaded", () => {

    //Form 1: Calcular Longitud 
    let lblLongitud = document.getElementById("Longitud");
    let btn1 = document.getElementById('Enviar');

    btn1.addEventListener('click', (e) => {
        e.preventDefault();

        let texto = document.getElementById('MegaTexto').value;
        lblLongitud.textContent = Longitud(texto)
    })





    //Form 2: Caracter en posición específica
    let lblCaracter = document.getElementById("Caracter");
    let btn2 = document.getElementById('Enviar2');

    btn2.addEventListener('click',(e)=>{
        e.preventDefault();

        let texto = document.getElementById('MegaTexto').value;
        let posicion = document.getElementById('posicion').value;
        lblCaracter.textContent = Posicion(texto,posicion)

    })

    //Form 3: Verificar palabra
    let lblValPalabra = document.getElementById('ValPalabra');
    let btn3 = document.getElementById('Enviar3');

    btn3.addEventListener('click', (e) =>{
        e.preventDefault();

        let texto = document.getElementById('MegaTexto').value;
        let palabra = document.getElementById('palabra').value;
        lblValPalabra.textContent = contienePalabra(texto,palabra)


    })


})