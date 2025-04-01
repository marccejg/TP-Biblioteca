export class Libros {
    private nombre:string;
    private tipo:string;
    private cantidad:number;
    constructor (pNombre:string,pTipo:string,pCantidad:number){
        this.nombre=pNombre;
        this.tipo=pTipo;
        this.cantidad=pCantidad; 
    };
}