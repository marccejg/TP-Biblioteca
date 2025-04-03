console.clear();
import * as fs from "readline-sync";
import { Libros } from "./libros";
import { Biblioteca } from "./biblioteca";


let listadoLibros: Libros[] = [];
console.log(listadoLibros);

let biblioteca = new Biblioteca("Recreo", listadoLibros);


let libro1 = biblioteca.nombreDeLibro();
biblioteca.ingresarLibro(libro1);

let libro2 = biblioteca.nombreDeLibro();
biblioteca.ingresarLibro(libro2);

console.log(biblioteca.retiraLibro());











//biblioteca.ingresarLibro()

