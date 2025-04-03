import * as fs from 'readline-sync';
export class Libros {

    private nombre: string;
    private tipo: string;
    //constructor
    constructor(pNombre: string, pTipo: string) {
        this.nombre = pNombre;
        this.tipo = pTipo;

       
    };

    //get y set
    public getNombre() {
        return this.nombre;
    }
    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }
    public getTipo() {
        return this.tipo;
    }
    public setTipo(pTipo: string): void {
        this.tipo = pTipo;
    }

    public nombreDeLibro(): {nombreLibro: string, tipoLibro: string} {
        //let idLibro: string = fs.question("Id: ") 
        let nombreLibro: string = fs.question("Nombre del libro: ")
        let tipoLibro: string = fs.question("que tipo de libro es: ")
      
            return {nombreLibro,tipoLibro};
}

}