console.clear();
import * as fs from 'readline-sync';
import { Libros } from "./libros";
import { Biblioteca } from "./biblioteca";
import { escuela } from '../../Clase 9/escuela';


let listadoLibros = new Array()
console.log(listadoLibros)
let biblioteca = new Biblioteca ("Recreo",listadoLibros);


//let libro1 = new Libros(nombreLibro,tipoLibro)
let libro1;
libro1.nombreDeLibro()
biblioteca.ingresarLibro(libro1)


console.log(listadoLibros)











//biblioteca.ingresarLibro()

