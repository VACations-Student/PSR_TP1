import { Router } from "express";
import DB from "../src/controllers/DB";
import { verifyToken } from "../jwt";
export const routeDomicilio = Router();

routeDomicilio.get('/', verifyToken, (_req,_res) =>{
    DB.get_todos_domicilios().then((domicilios) =>{
       _res.status(200).send(domicilios)
    })
});

routeDomicilio.get("/:direccion", verifyToken, (_req,_res) =>{
    DB.get_domicilio(_req.params.direccion).then((domicilio) =>{
       _res.status(200).send(domicilio)
    })
});

routeDomicilio.post("/", verifyToken, (_req,_res) =>{
    DB.post_domicilio(_req.body).then((domicilio) =>{
       _res.status(200).send(domicilio)
    })
});

routeDomicilio.delete("/:direccion", verifyToken, (_req,_res) =>{
    DB.delete_domicilio(_req.params.direccion).then((domicilio) =>{
       _res.status(200).send(domicilio)
    })
});

routeDomicilio.put("/:direccion", verifyToken, (_req,_res) =>{
    DB.put_domicilio(_req.params.direccion, _req.body).then((domicilio) =>{
       _res.status(200).send(domicilio)
    })
});

routeDomicilio.patch("/:direccion", verifyToken, (_req,_res) =>{
    DB.patch_domicilio(_req.params.direccion, _req.body).then((domicilio) =>{
       _res.status(200).send(domicilio)
    })
});

//Metodos personalizados

routeDomicilio.get("/:barrio/cantidad", verifyToken, (_req,_res) =>{
    DB.domicilios_x_barrio(_req.params.barrio).then((cant_apariciones) =>{
       _res.status(200).send(String(cant_apariciones))
    })
});