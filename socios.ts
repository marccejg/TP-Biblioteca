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
    public getNroSocio() {
        return this.nroSocio;
      }
      public setNroSocio(pNroSocio: number): void {
        this.nroSocio = pNroSocio;

      }public getNombre() {
        return this.nombre;
      }
      public setNombre(pNombre: string): void {
        this.nombre = pNombre;
      }
      public getApellido() {
        return this.apellido;
      }
      public setApellido(pApellido: string): void {
        this.apellido = pApellido;
      }
      public getTipo() {
        return this.tipo;
      }
      public setTipo(pTipo: boolean): void {
        this.tipo = pTipo;
      }

      /*matricularAlumno(pAlumno:Alumno) {
            this.Alumnos.push(pAlumno)
            console.log("Matriculaste un Alumno.")*/
};