"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domicilio = void 0;
class Domicilio {
    constructor(id_domicilio, direccion, empresa, barrio, consumo, dueño) {
        this.id_domicilio = id_domicilio;
        this.direccion = direccion;
        this.empresa = empresa;
        this.barrio = barrio;
        this.consumo = consumo;
        this.dueño = dueño;
    }
}
exports.Domicilio = Domicilio;
