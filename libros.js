"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libros = void 0;
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
    return Libros;
}());
exports.Libros = Libros;
