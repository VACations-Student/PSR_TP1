import bodyParser from "body-parser";
import { Domicilio } from "../Domicilio";
import { Router } from "express";
import { domicilios } from "..";
import DB from "../DB";
export const routeDomicilio = Router();

routeDomicilio.get('/', DB.get_todos_domicilios);

routeDomicilio.get("/:dueño", DB.get_domicilio);

routeDomicilio.post("/", DB.post_domicilio);

routeDomicilio.delete("/:dueño", DB.delete_domicilio);

routeDomicilio.put("/:dueño", DB.put_domicilio);

routeDomicilio.patch("/:dueño", DB.patch_domicilio);

//Metodos personalizados

routeDomicilio.get("/:barrio/cantidad", DB.domicilios_x_barrio);