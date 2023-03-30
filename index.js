"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = require("./Empresa");
const Corte_1 = require("./Corte");
const Domicilio_1 = require("./Domicilio");
let empresas = new Array;
let cortes = new Array;
let domicilios = new Array;
let ejemplo = new Empresa_1.Empresa(1, "Edenor", "Av. Falsa123");
let ejemplo2 = new Empresa_1.Empresa(2, "Edesur", "Av. Verdadera456");
empresas.push(ejemplo);
empresas.push(ejemplo2);
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (_req, _res) => _res.send('Bienvenido PA'));
app.get("/empresas", (_req, _res) => _res.json(empresas));
app.get("/empresas/:id_empresa", (_req, _res) => {
    _res.json(empresas.find(item => {
        return item.id_empresa == Number(_req.params.id_empresa);
    }));
});
app.post("/empresas/", (_req, _res) => {
    const empresa = new Empresa_1.Empresa(_req.body.id_empresa, _req.body.nombre, _req.body.direccion);
    empresas.push(empresa);
    _res.json(empresa);
});
app.delete("/empresas/:id_empresa", (_req, _res) => {
    const empresaa = empresas.find(item => {
        return item.id_empresa == Number(_req.params.id_empresa);
    });
    if (empresaa) {
    }
    _res.status(204).send();
});
app.get('/cortes', (_req, _res) => _res.json(cortes));
app.get("/cortes/:id_corte", (_req, _res) => {
    _res.json(cortes.find(item => {
        return item.id_corte == Number(_req.params.id_corte);
    }));
});
app.post("/cortes/", (_req, _res) => {
    const corte = new Corte_1.Corte(_req.body.id_corte, _req.body.inicio, _req.body.fin, _req.body.domicilio);
    cortes.push(corte);
    _res.json(corte);
});
app.get('/domicilios', (_req, _res) => _res.json(domicilios));
app.get("/domicilios/:id_domicilio", (_req, _res) => {
    _res.json(domicilios.find(item => {
        return item.id_domicilio == Number(_req.params.id_domicilio);
    }));
});
app.post("/domicilios/", (_req, _res) => {
    const domicilio = new Domicilio_1.Domicilio(_req.body.id_domicilio, _req.body.direccion, _req.body.barrio, _req.body.empresa, _req.body.consumo, _req.body.dueño);
    domicilios.push(domicilio);
    _res.json(domicilio);
});
app.delete("/Domicilio/:direccion", (_req, _res) => {
    const casa = Domicilio_1.Domicilio.find(item => {
        return item.direccion == String(_req.params.direccion);
    });
    if (casa) {
        delete Domicilio_1.Domicilio[casa];
    }
    _res.status(204).send();
});
app.put("/Domicilio/:direccion/:empresa/:barrio/:consumo/:dueño", (_req, _res) => {
    const casa = Domicilio_1.Domicilio.find(item => {
        return item.direccion == String(_req.params.direccion);
    });
    if (casa) {
        casa.empresa = _req.body.empresa;
        casa.barrio = _req.body.barrio;
        casa.consumo = _req.body.consumo;
        casa.dueño = _req.body.dueño;
    }
    _res.json(casa);
});
