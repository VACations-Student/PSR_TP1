import { Empresa } from "./Empresa"

export class Domicilio{
    id_domicilio: Number
    direccion: string
    empresa: Empresa
    barrio: string
    consumo: number
    dueño: string
    static find: any;

    constructor(id_domicilio: number, direccion: string, empresa: Empresa, barrio: string, consumo: number, dueño: string){
        this.id_domicilio = id_domicilio
        this.direccion = direccion
        this.empresa = empresa
        this.barrio = barrio
        this.consumo = consumo
        this.dueño = dueño
    }
}