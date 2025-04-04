import * as fs from 'readline-sync';
export class Libro {
    private idLibro: string
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
}