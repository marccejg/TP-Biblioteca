console.clear();
import * as fs from "readline-sync";
import { Libros } from "./libros";
import { Biblioteca } from "./biblioteca";


let listadoLibros: Libros[] = [];
console.log(listadoLibros);

let biblioteca = new Biblioteca("Recreo", listadoLibros);


biblioteca.ingresarLibro(biblioteca.nombreDeLibro());
let libro2 = biblioteca.nombreDeLibro();

console.log(listadoLibros);

biblioteca.retiraLibro();


