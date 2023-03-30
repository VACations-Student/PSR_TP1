import {Domicilio} from "./Domicilio";

export class Corte {
    id_corte: number
    inicio: Date = new Date()
    fin: Date = new Date()
    domicilio: Domicilio
    static find: any;

    constructor(id_corte: number, inicio: Date, fin: Date, domicilio: Domicilio){
        this.id_corte = id_corte
        this.inicio = inicio
        this.fin = fin
        this.domicilio = domicilio
    }
}