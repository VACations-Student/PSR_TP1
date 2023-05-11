import { Router } from "express";
import DB from "../src/controllers/DB";
import { verifyToken } from "../jwt";

export const routeEmpresas = Router();

routeEmpresas.get('/', verifyToken, (_req,_res)=>{
    DB.get_todas_empresas().then((empresas) =>{
        _res.status(200).send(empresas)
    })
}
);

routeEmpresas.get("/:nombre", verifyToken, (_req,_res)=>{
    DB.get_empresa(_req.params.nombre).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.post("/", verifyToken, (_req, _res)=>{
    DB.post_empresa(_req.body).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.delete("/:nombre", verifyToken, (_req,_res)=>{
    DB.delete_empresa(_req.params.nombre).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.put("/:nombre", verifyToken, (_req,_res)=>{
    DB.put_empresa(_req.params.nombre, _req.body).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.patch("/:nombre", verifyToken, (_req,_res)=>{
    DB.patch_empresa(_req.params.nombre, _req.body).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});