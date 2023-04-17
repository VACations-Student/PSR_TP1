import {Domicilio} from "./Domicilio";
import mongoose from "mongoose"

export class Corte extends mongoose.Document {
    id_corte: number
    inicio: Date = new Date()
    fin: Date = new Date()
    domicilio: Domicilio

    constructor(id_corte: number, inicio: Date, fin: Date, domicilio: Domicilio){
        super()
        this.id_corte = id_corte
        this.inicio = inicio
        this.fin = fin
        this.domicilio = domicilio
    }
}