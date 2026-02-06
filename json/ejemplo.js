
// Funcion para sacar el promedio de 3 numeros
function promedio3 (a, b, c) {
    return (a+b+c)/3;
}
console.log("Pruebas funcion 1")
console.log(promedio3(4, 6, 8));
console.log(promedio3(1, 1, 1));
console.log(promedio3(80, 50, 110));

// Funcion para sacar cuadrado de elementos
function cuadrado (arreglo) {
    const res = [];
    arreglo.forEach(element => {res.push(element * element)});
    return res;
}
console.log("Pruebas funcion 2")
console.log(cuadrado([1]));
console.log(cuadrado([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(cuadrado([]));

// Funcion para calcular impuestos de una venta
function impuesto(venta) {
    const ventaIVA = venta * 0.16;
    return [venta, ventaIVA, venta+ventaIVA];
}
console.log("Pruebas funcion 3")
console.log(impuesto(1000));
console.log(impuesto(2500));
console.log(impuesto(3999));

function promedioGen(arreglo) {
    let suma = 0;
    arreglo.forEach(element => {suma += element});
    return suma / arreglo.length;
}
console.log("Pruebas funcion 4")
console.log(promedioGen([1, 2, 3, 4, 5]));
console.log(promedioGen([10, 20, 30]));
console.log(promedioGen([5, 15, 25, 35, 45, 55]));