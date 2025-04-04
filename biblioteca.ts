import { Libro } from "./libros";
import * as fs from "readline-sync";

export class Biblioteca {
    private nombre: string;
    private libros: Libro[];

    constructor(pNombre: string, pLibros: Libro[],) {
        this.nombre = pNombre;
        this.libros = pLibros;
    }
    public getNombre() {
        return this.nombre;
    }
    public getLibros() {
        return this.libros;
    }
    //////////////////
    public nombreDeLibro = (): Libro => {
        let nombre = fs.question("Nombre del libro: ");
        let tipo = fs.question("Que tipo de libro es?: ");
        return new Libro(nombre, tipo);
    }
    public ingresarLibro(libro:Libro) {

        this.libros.push(libro)
        console.log(`Usted está agregando el libro: ${libro.getNombre()}`);
    };


    ////////////////////

    public cantidadLibros() { }

    public retiraLibro() {
        console.log(this.libros);
        let eliminaLibro = fs.question("Que libro quiere retirar?");
        this.libros = this.libros.filter(libro => libro.getNombre() != eliminaLibro);
        console.log(`Usted elimino el libro: ${eliminaLibro}`);
    }




}




