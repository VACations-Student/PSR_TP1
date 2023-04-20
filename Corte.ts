export class Corte {
    id_corte: number
    inicio: Date = new Date()
    fin: Date = new Date()
    barrio: string

    constructor(id_corte: number, inicio: Date, fin: Date, barrio: string){
        this.id_corte = id_corte
        this.inicio = inicio
        this.fin = fin
        this.barrio = barrio
    }
}