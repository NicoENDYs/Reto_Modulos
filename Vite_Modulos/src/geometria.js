////////////////////CIRCULO////////////////////
export function Diametro(r){
    let diametro= 2*r;
    return  diametro;
}
export function Area(r){
    let area = Math.PI*Math.pow(r,2)
    return area;
}
export function Perimetro(r){
    let perimetro = 2*Math.PI*r
    return perimetro
}
////////////////////RECTANGULO////////////////////
export function RArea(b,h){
    let area =b*h
    return area;
}
export function RPerimetro(b,h){
    let perimetro = 2*(b*h)
    return perimetro;
}
export function RDiagonal(b,h){
    let diagonal = Math.sqrt(Math.pow(b,2)+Math.pow(h,2))
    return diagonal;
}

////////////////////TRIANGULO RECTANGULO////////////////////
export function TArea(b,h){
    let area = (b*h)/2
    return area;
}
export function TPerimetro(b,h){
    let perimetro = b+h+Math.sqrt(Math.pow(b,2)+Math.pow(h,2))
    return perimetro;
}
export function THipotenusa(b,h){
    let Hipo = Math.sqrt(Math.pow(b,2)+Math.pow(h,2))
    return Hipo;
}