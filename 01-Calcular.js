import { Area, Diametro, Perimetro } from "./geometria.js";
import { RArea, RDiagonal, RPerimetro } from "./geometria.js";
import { TArea, TPerimetro, THipotenusa } from "./geometria.js";

document.addEventListener("DOMContentLoaded", () => {
    /////////Circulo//////////
    let CirculoDiametro = document.getElementById('CResultadoDiametro');
    let CirculoArea = document.getElementById('CResultadoArea');
    let CirculoPerimetro = document.getElementById('CResultadoPerimetro');
    let btn1 = document.getElementById('Enviar');

    btn1.addEventListener('click', (e) => {
        e.preventDefault();

        let varDiametro = document.getElementById('varCirculo').value;
        CirculoDiametro.innerHTML = Diametro(varDiametro);
        CirculoArea.innerHTML = Area(varDiametro).toFixed(2);
        CirculoPerimetro.innerHTML = Perimetro(varDiametro).toFixed(2);

    });

    /////////Circulo//////////  
    let RecArea = document.getElementById('RArea');
    let RecPerimetro = document.getElementById('RPerimetro');
    let RecDiagonal = document.getElementById('RDiagonal');
    let btn2 = document.getElementById('Enviar2');

    btn2.addEventListener('click', (e) => {
        e.preventDefault();

        let b = document.getElementById('RecBase').value
        let h = document.getElementById('RecAltura').value

        RecArea.innerHTML = RArea(b, h);
        RecPerimetro.innerHTML = RPerimetro(b, h);
        RecDiagonal.innerHTML = RDiagonal(b, h).toFixed(2);
    })

    /////////TrianguloRectangulo//////////  
    let TriArea = document.getElementById('TriArea');
    let TriPerimetro = document.getElementById('TRiPerimetro');
    let TriPitagoras = document.getElementById('TriPitagoras');
    let btn3 = document.getElementById('Enviar3');

    btn3.addEventListener('click', (e) => {
        e.preventDefault();

        let b = parseFloat(document.getElementById('TriBase').value);
        let h = parseFloat(document.getElementById('TriAltura').value);

        TriArea.innerHTML = TArea(b, h);
        TriPerimetro.innerHTML = TPerimetro(b, h).toFixed(2);
        TriPitagoras.innerHTML = THipotenusa(b, h).toFixed(2);
    })


});
