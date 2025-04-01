export class Socios {
    private nroSocio:number;
    private nombre:string;
    private apellido:string
    private tipo:boolean;

    constructor (pNroSocio:number,pNombre:string,pApellido:string,pTipo:boolean){
        this.nroSocio=pNroSocio;
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.tipo=pTipo;
    };
}