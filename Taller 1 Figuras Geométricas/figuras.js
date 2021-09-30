//Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triángulo
/* console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: "
    + ladoTriangulo1
    + " cm, " 
    + ladoTriangulo2 
    + " cm, "
    +  baseTriangulo 
    + "cm")

console.log("La altura del triángulo es de: " + alturaTriangulo + " cm") */

function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
}

//console.log("El perímetro del triángulo es de " + perimetroTriangulo + " cm");

function areaTriangulo (base,altura) {
    return (base * altura) / 2;
}

// console.log("El área del triángulo es " + areaTriangulo + " cm");
console.groupEnd();

// Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cm");

//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
} 

//Pi
const PI = Math.PI;
console.log("PI es: " + PI)

//Circunferencia

function perimetroCirculo (radio) { 
    //const diametro = diametroCirculo(radio);
    return radio * PI;}

//console.log("La circunferencia del circulo es " + perimetroCirculo + " cm")

//Area

function areaCirculo(radio) {
    return (radio * radio) * PI
};

console.groupEnd();

//Aquí interactuamos con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularAltura(lado,base){
    return Math.sqrt((lado*lado) - ((base*base)/4));
}

function calcularAlturaTriangulo() {
    const $lado = document.getElementById("InputTrianguloLado");
    const lado = $lado.value;
    const $base = document.getElementById("InputTrianguloBase");
    const base = $base.value;

    const alturaTriangulo = calcularAltura(lado,base);
    (lado === base) ?  alert("La lados y la base no pueden ser iguales o no es un triángulo isósceles") : alert(alturaTriangulo);   
}


function calcularDiametroCirculo() {
    const $radio = document.getElementById("InputCirculo");
    const radio = $radio.value;
    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const $radio = document.getElementById("InputCirculo");
    const radio = $radio.value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
};

function calcularAreaCirculo() {
    const $radio = document.getElementById("InputCirculo");
    const radio = $radio.value;
    const area = areaCirculo(radio);
    alert(area);
}