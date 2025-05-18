import './styles2.css'
import { Longitud,Posicion,contienePalabra, reemplazarPalabra, extraerTexto } from "./02-Text.js";

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
        contienePalabra(texto,palabra)
    })


    //Form 4: Reemplazar palabra
    let btn4 = document.getElementById('Enviar4');

    btn4.addEventListener('click', (e) =>{
        e.preventDefault();
        let texto = document.getElementById('MegaTexto').value;
        let palabraOriginal = document.getElementById('palabraOriginal').value;
        let nuevaPalabra = document.getElementById('nuevaPalabra').value
        let resultado = reemplazarPalabra(texto,palabraOriginal,nuevaPalabra)
        document.getElementById('TextoModificado').value = resultado;
    })

    //Form 5: Extraer porcion del texto de x a y
    let btn5 = document.getElementById('Enviar5');

    btn5.addEventListener('click', (e) =>{
        e.preventDefault();
        let texto = document.getElementById('MegaTexto').value;
        let inicio = document.getElementById('inicio').value;
        let fin = document.getElementById('fin').value;

        let resultado = extraerTexto(texto, inicio, fin);
        document.getElementById('TextoExtraido').value = resultado;
    })


})

