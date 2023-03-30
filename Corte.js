"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corte = void 0;
class Corte {
    constructor(id_corte, inicio, fin, domicilio) {
        this.inicio = new Date();
        this.fin = new Date();
        this.id_corte = id_corte;
        this.inicio = inicio;
        this.fin = fin;
        this.domicilio = domicilio;
    }
}
exports.Corte = Corte;
