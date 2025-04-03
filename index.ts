console.clear();
import * as fs from 'readline-sync';
import { Libros } from "./libros";
import { Biblioteca } from "./biblioteca";
let listadoLibros = new Array();
console.log(listadoLibros);
let biblioteca = new Biblioteca("Recreo", listadoLibros);
let nombreLibro = fs.question("Ingrese el nombre del libro: ");
let tipoLibro = fs.question("Ingrese el tipo del libro: ");
let libro1 = new Libros(nombreLibro, tipoLibro);
// Ingresa el libro en la biblioteca
biblioteca.ingresarLibro(libro1);
console.log(listadoLibros);







//biblioteca.ingresarLibro()

