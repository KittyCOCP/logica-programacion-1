/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:

Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.

Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”

Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.
Piensa en las posibles combinaciones de números, para ayudarte puedes desarrollar un algoritmo y el pseudocódigo.
*/
let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
let num3 = prompt("Ingresa el tercer número:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let numeros = [num1, num2, num3];

if (num1 === num2) {
    console.log("El primer y segundo número son iguales");
}
if (num2 === num3) {
    console.log("El segundo y tercer número son iguales");
}
if (num1 === num3) {
    console.log("El primer y tercer número son iguales");
}

if (numeros[0] < numeros[1]) {
    let temporal = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temporal;
}
if (numeros[1] < numeros[2]) {
    let temporal = numeros[1];
    numeros[1] = numeros[2];
    numeros[2] = temporal;
}
if (numeros[0] < numeros[1]) {
    let temporal = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temporal;
}

console.log("De mayor a menor:", numeros);

let menoresAMayores = [numeros[2], numeros[1], numeros[0]];

console.log("De menor a mayor:", menoresAMayores);