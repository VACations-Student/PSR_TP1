import express from "express";
import { empresaModel } from "./src/models/empresaModel";
//import { domicilioModel } from "./models";

export default {
    get_todas_empresas: async (_req: express.Request, _res: express.Response) => {
        const output = await empresaModel.find()
        _res.status(200).send(output)
    },
    get_empresas: async (_req: express.Request, _res: express.Response) => {
        let output = await empresaModel.find({"nombre": _req.params.nombre})
        console.log(output)
    }
}