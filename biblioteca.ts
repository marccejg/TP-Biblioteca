import { Libros } from "./libros";
import * as fs from "readline-sync";

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
//////////////////
public nombreDeLibro=(): Libros => {
    let nombre = fs.question("Nombre del libro: ");
    let tipo = fs.question("Que tipo de libro es?: ");
    return new Libros(nombre, tipo);
}
    public ingresarLibro(pLibros) {
        
        this.libros.push(pLibros)
        console.log(`Usted está agregando el libro: ${pLibros}`);
    };


    ////////////////////

    public cantidadLibros() { }

    public retiraLibro(){
    let eliminaLibro = fs.question("Que libro quiere retirar?");
    this.libros = this.libros.filter(libro => libro.getNombre() !== eliminaLibro);
    console.log(`Usted elimino el libro: ${eliminaLibro}`);  
    }  




    }

   


