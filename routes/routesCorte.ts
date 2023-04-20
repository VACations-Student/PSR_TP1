import bodyParser from "body-parser";
import { Corte } from "../Corte";
import { Router } from "express";
import DB from "../DB";
export const routeCortes = Router();

routeCortes.get('/', DB.get_todos_cortes);

routeCortes.get("/:id_corte", DB.get_corte);

routeCortes.post("/", DB.post_corte);

routeCortes.delete("/:id_corte", DB.delete_corte);

routeCortes.put("/:id_corte", DB.put_corte);

routeCortes.patch("/:id_corte", DB.patch_corte);

//Metodo personalizado

routeCortes.get("/:id_corte/duracion", DB.duracion_x_corte);

routeCortes.get("/:barrio/cantidad_de_cortes", DB.cortes_x_barrio);