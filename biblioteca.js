"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var fs = require("readline-sync");
var Biblioteca = /** @class */ (function () {
    function Biblioteca(pNombre, pLibros) {
        this.nombre = pNombre;
        this.libros = pLibros;
    }
    Biblioteca.prototype.getNombre = function () {
        return this.nombre;
    };
    Biblioteca.prototype.ingresarLibro = function (pLibros) {
        this.libros.push(pLibros);
        console.log("Usted esta agregando el libro: ".concat(pLibros));
    };
    ;
    Biblioteca.prototype.cantidadLibros = function () { };
    Biblioteca.prototype.retiraLibro1 = function () { };
    Biblioteca.prototype.retiraLibro = function (libro) {
    };
    Biblioteca.prototype.nombreDeLibro = function () {
        //let idLibro: string = fs.question("Id: ") 
        var nombreLibro = fs.question("Nombre del libro: ");
        var tipoLibro = fs.question("que tipo de libro es: ");
        return { nombreLibro: nombreLibro, tipoLibro: tipoLibro };
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
