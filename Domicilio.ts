import { Empresa } from "./Empresa"

export class Domicilio {
    id_domicilio: Number
    direccion: string
    nombre_empresa: string
    barrio: string
    consumo: number
    dueño: string
    ids_cortes: number[]

    constructor(id_domicilio: number, direccion: string, nombre_empresa: string, barrio: string, consumo: number, dueño: string, ids_cortes:number[]){
        this.id_domicilio = id_domicilio
        this.direccion = direccion
        this.nombre_empresa = nombre_empresa
        this.barrio = barrio
        this.consumo = consumo
        this.dueño = dueño
        this.ids_cortes=ids_cortes
    }
}