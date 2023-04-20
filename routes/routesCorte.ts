import { Router } from "express";
import DB from "../src/controllers/DB";
export const routeCortes = Router();

routeCortes.get('/', (_req,_res) =>{
    DB.get_todos_cortes().then((cortes)=>{
       _res.status(200).send(cortes)
    })
});

routeCortes.get("/:id_corte", (_req,_res) =>{
    DB.get_corte(Number(_req.params.id_corte)).then((corte)=>{
       _res.status(200).send(corte)
    })
});

routeCortes.post("/", (_req,_res) =>{
    DB.post_corte(_req.body).then((corte)=>{
       _res.status(200).send(corte)
    })
});

routeCortes.delete("/:id_corte", (_req,_res) =>{
    DB.delete_corte(Number(_req.params.id_corte)).then((corte)=>{
       _res.status(200).send(corte)
    })
});

routeCortes.put("/:id_corte", (_req,_res) =>{
    DB.put_corte(Number(_req.params.id_corte), _req.body).then((corte)=>{
       _res.status(200).send(corte)
    })
});

routeCortes.patch("/:id_corte", (_req,_res) =>{
    DB.patch_corte(Number(_req.params.id_corte), _req.body).then((corte)=>{
       _res.status(200).send(corte)
    })
});

//Metodo personalizado
routeCortes.get("/:barrio/cantidad_de_cortes", (_req,_res) =>{
    DB.cortes_x_barrio(_req.params.barrio).then((cant_apariciones)=>{
       _res.status(200).send(String(cant_apariciones))
    })
});

routeCortes.get("/:id_corte/duracion", (_req,_res) =>{
    DB.duracion_x_corte(Number(_req.params.id_corte)).then((duracion)=>{
       _res.status(200).send(String(duracion))
    })
});