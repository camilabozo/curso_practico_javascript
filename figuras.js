// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


// Código del triángulo
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();


// Código del círculo
console.group("Circulos");
function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();


// Aquí interactuamos con el HTML
//Cuadrados
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value= input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


//Triangulos
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const value1 = Number(inputLado1.value);
    
    const inputLado2 = document.getElementById("inputTriangulo2");
    const value2 = Number(inputLado2.value);

    const inputLado3 = document.getElementById("inputTrianguloBase");
    const value3 = Number(inputLado3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}