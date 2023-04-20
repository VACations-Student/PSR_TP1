import express, { json } from "express";
import { empresaModel } from "./src/models/empresaModel";
import { domicilioModel } from "./src/models/domicilioModel";
import { corteModel } from "./src/models/corteModel";

export default {
    //Empresas
    get_todas_empresas: async (_req: express.Request, _res: express.Response) => {
        const output = await empresaModel.find()
        _res.status(200).send(output)
    },
    get_empresas: async (_req: express.Request, _res: express.Response) => {
        let output = await empresaModel.find({"nombre": _req.params.nombre})
        _res.status(200).send(output)
    },
    delete_empresa: async (_req: express.Request, _res: express.Response) => {
        let output = await empresaModel.findOneAndDelete({"nombre": _req.params.nombre})
        _res.status(200).send("Se elimino")
    },
    post_empresa: async (_req: express.Request, _res: express.Response) => {
        let output = await empresaModel.create(_req.body)
        _res.status(200).send(output)
    },
    put_empresa: async (_req: express.Request, _res: express.Response) => {
        let output_pre_put = await empresaModel.findOneAndReplace({"nombre": _req.params.nombre},_req.body)
        let output_post_put = await empresaModel.find({"nombre": _req.params.nombre})
        _res.status(200).send(output_post_put)
    },
    patch_empresa: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await empresaModel.findOneAndUpdate({"nombre": _req.params.nombre},_req.body)
        let output_post_patch = await empresaModel.find({"nombre": _req.params.nombre})
        _res.status(200).send(output_post_patch)
    },
    //Domicilios
    get_todos_domicilios: async (_req: express.Request, _res: express.Response) => {
        const output = await domicilioModel.find()
        _res.status(200).send(output)
    },
    get_domicilio: async (_req: express.Request, _res: express.Response) => {
        let output = await domicilioModel.find({"dueño": _req.params.dueño})
        _res.status(200).send(output)
    },
    post_domicilio: async (_req: express.Request, _res: express.Response) => {
        let output = await domicilioModel.create(_req.body)
        _res.status(200).send(output)
    },
    delete_domicilio: async (_req: express.Request, _res: express.Response) => {
        let output = await domicilioModel.findOneAndDelete({"dueño": _req.params.dueño})
        _res.status(200).send("Se elimino")
    },
    put_domicilio: async (_req: express.Request, _res: express.Response) => {
        let output_pre_put = await domicilioModel.findOneAndReplace({"dueño": _req.params.dueño},_req.body)
        let output_post_put = await domicilioModel.find({"dueño": _req.params.dueño})
        _res.status(200).send(output_post_put)
    },
    patch_domicilio: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await domicilioModel.findOneAndUpdate({"dueño": _req.params.dueño},_req.body)
        let output_post_patch = await domicilioModel.find({"dueño": _req.params.dueño})
        _res.status(200).send(output_post_patch)
    },
    domicilios_x_barrio: async (_req: express.Request, _res: express.Response) => {
        const output = await domicilioModel.find()
        let cant_apariciones = 0;
        output.forEach(element => {
            if(element.barrio==_req.params.barrio){
                cant_apariciones+=1
            }
        });
        _res.json("El barrio aparecio esta cantidad de veces: "+cant_apariciones)
    },
    get_todos_cortes: async (_req: express.Request, _res: express.Response) => {
        const output = await corteModel.find()
        _res.status(200).send(output)
    },
    get_corte: async (_req: express.Request, _res: express.Response) => {
        let output = await corteModel.find({"id_corte": _req.params.id_corte})
        _res.status(200).send(output)
    },
    post_corte: async (_req: express.Request, _res: express.Response) => {
        let output = await corteModel.create(_req.body)
        _res.status(200).send(output)
    },
    put_corte: async (_req: express.Request, _res: express.Response) => {
        let output_pre_put = await corteModel.findOneAndReplace({"id_corte": _req.params.id_corte},_req.body)
        let output_post_put = await corteModel.find({"id_corte": _req.params.id_corte})
        _res.status(200).send(output_post_put)
    },
    delete_corte: async (_req: express.Request, _res: express.Response) => {
        let output = await corteModel.findOneAndDelete({"id_corte": _req.params.id_corte})
        _res.status(200).send("Se elimino")
    },
    patch_corte: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await corteModel.findOneAndUpdate({"id_corte": _req.params.id_corte},_req.body)
        let output_post_patch = await corteModel.find({"id_corte": _req.params.id_corte})
        _res.status(200).send(output_post_patch)
    },
    duracion_del_corte: async (_req: express.Request, _res: express.Response) => {
        let output = await corteModel.find({"id_corte": _req.params.id_corte})
        _res.status(200).send(output)
    },
    cortes_x_barrio: async (_req: express.Request, _res: express.Response) => {
        const output = await corteModel.find()
        let cant_apariciones = 0;
        output.forEach(element => {
            if(element.barrio==_req.params.barrio){
                cant_apariciones+=1
            }
        });
        _res.json("Estas son la cantidad de cortes por barrio: "+cant_apariciones)
    },
}