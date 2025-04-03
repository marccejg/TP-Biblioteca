"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libros = void 0;
var fs = require("readline-sync");
var Libros = /** @class */ (function () {
    //constructor
    function Libros(pNombre, pTipo) {
        this.nombre = pNombre;
        this.tipo = pTipo;
    }
    ;
    //get y set
    Libros.prototype.getNombre = function () {
        return this.nombre;
    };
    Libros.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Libros.prototype.getTipo = function () {
        return this.tipo;
    };
    Libros.prototype.setTipo = function (pTipo) {
        this.tipo = pTipo;
    };
    Libros.prototype.nombreDeLibro = function () {
        //let idLibro: string = fs.question("Id: ") 
        var nombreLibro = fs.question("Nombre del libro: ");
        var tipoLibro = fs.question("que tipo de libro es: ");
        return { nombreLibro: nombreLibro, tipoLibro: tipoLibro };
    };
    return Libros;
}());
exports.Libros = Libros;
