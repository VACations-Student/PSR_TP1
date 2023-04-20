import bodyParser from "body-parser";
import { Corte } from "../Corte";
import { Router } from "express";
import { cortes } from "..";
import DB from "../DB";
export const routeCortes = Router();

routeCortes.get('/', DB.get_todos_cortes);

routeCortes.get("/:id_corte", DB.get_corte);

routeCortes.post("/", DB.post_corte);

routeCortes.delete("/:id_corte", DB.delete_corte);

routeCortes.put("/:id_corte", DB.put_corte);

routeCortes.patch("/:id_corte", DB.patch_corte);

//Metodo personalizado

routeCortes.get("/:id_corte/duracion", (_req , _res) => {
    const corte = cortes.find(item => {
                return item.id_corte == Number(_req.params.id_corte)
    });
    if(corte){
        let duracion = ((new Date(corte.fin).getTime()- new Date(corte.inicio).getTime())/60000)/60
        duracion = Number(duracion.toFixed(3))
        _res.json(duracion)
    }
    else{
        _res.send(404)
    }
});

routeCortes.get("/:barrio/cantidad_de_cortes", DB.cortes_x_barrio);