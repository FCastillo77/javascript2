import{calcularletras} from "./ejercicio1.js";
import{palabrarecortada} from "./ejercicio2.js";
import{separar} from "./ejercicio3.js";
import {repetircad} from "./ejercicio4.js";
import {invertircadena} from "./ejercicio5.js";
import { encontrarstring } from "./ejercicio6.js";
import{palindromo} from "./ejercicio7.js";
import{quitarcadenas} from "./ejercicio8.js";

console.log('Ejercicio 1');
console.log(calcularletras("arbol"));
console.log('Ejercicio 2');
console.log(palabrarecortada("Hola mundo",7));
console.log('Ejercicio 3');
console.log(separar("Hola que-tal","-"));
console.log('Ejercicio 4');
repetircad("hola  mundo", 2);
console.clear();
console.log('Ejercicio 5');
console.log(invertircadena("arbol"));
console.log('Ejercicio 6');
console.log(encontrarstring("hola mundo adios mundo","mundo"));
console.log('Ejercicio 7');
console.log(palindromo("uwu"));
console.log('Ejercicio 8');
console.log(quitarcadenas("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"));
console.log('Ejercicio 9');

