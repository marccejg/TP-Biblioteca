import { Libros } from "./libros";
import * as fs from 'readline-sync';

export class Biblioteca {
    private nombre: string;
    private libros: Libros[];

    constructor(pNombre: string, pLibros: Libros[],) {
        this.nombre = pNombre;
        this.libros = pLibros;
    }
    public getNombre() {
        return this.nombre;
    }

    public ingresarLibro(pLibros: Libros) {
        this.libros.push(pLibros)
        console.log(`Usted esta agregando el libro: ${pLibros}`)
    };

    public cantidadLibros() { }
    public retiraLibro1() { }
    public retiraLibro(libro:Libros[]) {
    }  

    public nombreDeLibro(): {nombreLibro: string, tipoLibro: string} {
    //let idLibro: string = fs.question("Id: ") 
    let nombreLibro: string = fs.question("Nombre del libro: ")
    let tipoLibro: string = fs.question("que tipo de libro es: ")
  
        return {nombreLibro,tipoLibro};

    }

   



}

