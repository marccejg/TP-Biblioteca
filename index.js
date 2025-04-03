"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
var biblioteca_1 = require("./biblioteca");
var listadoLibros = new Array();
console.log(listadoLibros);
var biblioteca = new biblioteca_1.Biblioteca("Recreo", listadoLibros);
//let libro1 = new Libros(nombreLibro,tipoLibro)
var libro1;
libro1.nombreDeLibro();
biblioteca.ingresarLibro(libro1);
console.log(listadoLibros);
//biblioteca.ingresarLibro()
