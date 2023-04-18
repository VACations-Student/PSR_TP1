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

routeEmpresas.put("/:nombre", (_req,_res) => {
    const compania = empresas.find(item => {
                  return item.id_empresa == Number(_req.params.nombre)
    })
            if (!compania){
                _res.send(404)
                return    
            }
            if(_req.body.direccion==undefined  || _req.body.nombre==undefined  || _req.body.id_empresa==undefined ){
                _res.send(404)
                return    
            }
            else{
                compania.direccion = _req.body.direccion
                compania.nombre = _req.body.nombre
                compania.id_empresa = _req.body.id_empresa
            }
            _res.json(compania); 
            _res.send(200);
});

routeEmpresas.patch("/:id_empresa", (_req,_res) => {
    const compania = empresas.find(item => {
                  return item.id_empresa == Number(_req.params.id_empresa)
              })
    if (!compania){
        _res.send(404)
        return    
    }
    if (_req.body.direccion != null){
        compania.direccion = _req.body.direccion
    }
    if (_req.body.nombre != null){
        compania.nombre = _req.body.nombre
    }
    if (_req.body.id_empresa != null){
        compania.id_empresa = _req.body.id_empresa
    }
    _res.json(compania);   
});