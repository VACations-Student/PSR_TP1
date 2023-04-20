import { Empresa } from "./Empresa"

export class Domicilio {
    direccion: string
    nombre_empresa: string
    barrio: string
    consumo: number
    dueño: string
    ids_cortes: number[]

    constructor(direccion: string, nombre_empresa: string, barrio: string, consumo: number, dueño: string, ids_cortes:number[]){
        this.direccion = direccion
        this.nombre_empresa = nombre_empresa
        this.barrio = barrio
        this.consumo = consumo
        this.dueño = dueño
        this.ids_cortes=ids_cortes
    }
}