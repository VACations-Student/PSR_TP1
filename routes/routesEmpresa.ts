import bodyParser from "body-parser";
import { Empresa } from "../Empresa";
import { Router } from "express";
import { empresas } from "..";
import DB from "./../DB"
export const routeEmpresas = Router();

routeEmpresas.get('/', DB.get_todas_empresas);

routeEmpresas.get("/:nombre", DB.get_empresas);

routeEmpresas.post("/", DB.post_empresa);

routeEmpresas.delete("/:nombre", DB.delete_empresa);

routeEmpresas.put("/:nombre", DB.put_empresa);

routeEmpresas.patch("/:nombre", DB.post_empresa);