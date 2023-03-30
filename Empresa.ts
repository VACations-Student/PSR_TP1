import {Corte} from "./Corte";

export class Empresa {
    id_empresa: Number
    nombre: string
    direccion: string
    static find: any;

    constructor(id_empresa: number, nombre: string, direccion: string){
    this.id_empresa = id_empresa
    this.nombre = nombre
    this.direccion = direccion
    }
    

}