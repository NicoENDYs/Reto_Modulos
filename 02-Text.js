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
        return "Trae la Palabra"
    }
    else{
        return "No trae la Palabra"
    }
}   