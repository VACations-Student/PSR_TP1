import { Router } from "express";
import DB from "../src/controllers/DB";
export const routeEmpresas = Router();

routeEmpresas.get('/', (_req,_res)=>{
    DB.get_todas_empresas().then((empresas) =>{
        _res.status(200).send(empresas)
    })
}
);

routeEmpresas.get("/:nombre", (_req,_res)=>{
    DB.get_empresa(_req.params.nombre).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.post("/", (_req, _res)=>{
    DB.post_empresa(_req.body).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.delete("/:nombre", (_req,_res)=>{
    DB.delete_empresa(_req.params.nombre).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.put("/:nombre", (_req,_res)=>{
    DB.put_empresa(_req.params.nombre, _req.body).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});

routeEmpresas.patch("/:nombre", (_req,_res)=>{
    DB.patch_empresa(_req.params.nombre, _req.body).then((empresa) =>{
       _res.status(200).send(empresa)
    })
});