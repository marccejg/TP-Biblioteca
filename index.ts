console.clear();
import * as fs from "readline-sync";
import { Libro } from "./libros";
import { Biblioteca } from "./biblioteca";


const listadoLibros: Libro[] = [];
console.log(listadoLibros);

const biblioteca = new Biblioteca("Recreo", listadoLibros);

biblioteca.ingresarLibro(biblioteca.nombreDeLibro());
biblioteca.ingresarLibro(biblioteca.nombreDeLibro());

biblioteca.retiraLibro();

console.log(biblioteca.getLibros());

