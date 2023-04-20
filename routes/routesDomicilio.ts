import bodyParser from "body-parser";
import { Domicilio } from "../Domicilio";
import { Router } from "express";
import DB from "../DB";
export const routeDomicilio = Router();

routeDomicilio.get('/', DB.get_todos_domicilios);

routeDomicilio.get("/:direccion", DB.get_domicilio);

routeDomicilio.post("/", DB.post_domicilio);

routeDomicilio.delete("/:direccion", DB.delete_domicilio);

routeDomicilio.put("/:direccion", DB.put_domicilio);

routeDomicilio.patch("/:direccion", DB.patch_domicilio);

//Metodos personalizados

routeDomicilio.get("/:barrio/cantidad", DB.domicilios_x_barrio);