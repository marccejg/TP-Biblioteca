"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var libros_1 = require("./libros");
var fs = require("readline-sync");
var Biblioteca = /** @class */ (function () {
    function Biblioteca(pNombre, pLibros) {
        this.nombreDeLibro = function () {
            var nombre = fs.question("Nombre del libro: ");
            var tipo = fs.question("¿Qué tipo de libro es?: ");
            return new libros_1.Libros(nombre, tipo);
        };
        this.nombre = pNombre;
        this.libros = pLibros;
    }
    Biblioteca.prototype.getNombre = function () {
        return this.nombre;
    };
    Biblioteca.prototype.ingresarLibro = function (pLibros) {
        this.libros.push(pLibros);
        console.log("Usted est\u00E1 agregando el libro: ".concat(pLibros));
    };
    ;
    Biblioteca.prototype.cantidadLibros = function () { };
    Biblioteca.prototype.retiraLibro = function () {
        var eliminaLibro = fs.question("Que libro quiere retirar?");
        this.libros = this.libros.filter(function (libro) { return libro.getNombre() !== eliminaLibro; });
        console.log("Usted elimino el libro: ".concat(eliminaLibro));
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
