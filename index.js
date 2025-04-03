"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
var biblioteca_1 = require("./biblioteca");
var listadoLibros = [];
console.log(listadoLibros);
var biblioteca = new biblioteca_1.Biblioteca("Recreo", listadoLibros);
var libro1 = biblioteca.nombreDeLibro();
biblioteca.ingresarLibro(libro1);
var libro2 = biblioteca.nombreDeLibro();
biblioteca.ingresarLibro(libro2);
console.log(biblioteca.retiraLibro());
//biblioteca.ingresarLibro()
