import { Libros } from "./libros";
import { Socios } from "././socios";
export class Biblioteca {
    private nombre:string;
    private libros:Libros[];
    private socios:Socios[];
    constructor(pNombre:string,pLibros:Libros[],pSocios:Socios[]){
        this.nombre = pNombre;
        this.libros = pLibros;
        this.socios = pSocios;
    }
}

