export function Longitud(text){
    let longitud = text.length;
    return longitud;
}
export function Posicion(texto, posicion) {
    if (posicion >= 0 && posicion < texto.length) {
        return texto.charAt(posicion);
    } else {

        return "La posición no existe";
    }
}
export function  contienePalabra(texto, palabra) {
    const regex = new RegExp(`\\b${palabra}\\b`, 'i');
    const bool = regex.test(texto);
    if (bool == true){
        return Swal.fire({
            icon: "success",
            title: "SI...",
            text:"SI Trae la Palabra!"
        });
    }
    else{
        return Swal.fire({
            icon: "error",
            title: "No...",
            text:"NO Trae la Palabra!"
        });
    }
}   
export function reemplazarPalabra(texto, palabraOriginal, nuevaPalabra) {
    return texto.replaceAll(palabraOriginal, nuevaPalabra);
}

export function extraerTexto(texto, inicio, fin) {
    if (inicio < 0 || fin > texto.length) {
        return "Posiciones inválidas";
    }
        return texto.substring(inicio, fin);
}