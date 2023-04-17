import bodyParser from "body-parser";
import { Domicilio } from "../Domicilio";
import { Router } from "express";
import { domicilios } from "..";
export const routeDomicilio = Router();

routeDomicilio.get('/', (_req , _res) => _res.json(domicilios));

routeDomicilio.get("/:id_domicilio", (_req , _res) => {
    _res.json(domicilios.find(item => {
                return item.id_domicilio == Number(_req.params.id_domicilio)
    }));
});

routeDomicilio.post("/", (_req , _res) => {
    const domicilio = new Domicilio(_req.body.id_domicilio, _req.body.direccion, _req.body.empresa, _req.body.barrio, _req.body.consumo, _req.body.dueño)
    domicilios.push(domicilio)
    _res.json(domicilio)
});

routeDomicilio.delete("/:id_domicilio", (_req , _res) => {
    const domicilio = domicilios.find(item => {
        return item.id_domicilio == Number(_req.params.id_domicilio)
    })
    if(domicilio){
        domicilios.splice(domicilios.indexOf(domicilio),1)
    }
    _res.status(204).send()
});

routeDomicilio.put("/:id_domicilio", (_req,_res) => {
    const casa = domicilios.find(item => {
                  return item.id_domicilio == Number(_req.params.id_domicilio)
              })
            if (!casa){
                _res.send(404)
                return    
            }
            if(_req.body.id_domicilio==undefined || _req.body.dueño==undefined  || _req.body.direccion==undefined  || _req.body.empresa==undefined  || _req.body.empresa.id_empresa==undefined  || _req.body.empresa.nombre==undefined  || _req.body.empresa.direccion==undefined  || _req.body.barrio==undefined  || _req.body.consumo==undefined ){
                _res.send(404)
                return    
            }
            else{
                casa.id_domicilio =  _req.body.id_domicilio
                casa.dueño = _req.body.dueño
                casa.direccion = _req.body.direccion
                casa.empresa = _req.body.empresa
                casa.barrio = _req.body.barrio
                casa.consumo = _req.body.consumo
            }
            _res.json(casa); 
            _res.sendStatus(200);
  });

routeDomicilio.patch("/:id_domicilio", (_req,_res) => {
    const casa = domicilios.find(item => {
                  return item.id_domicilio == Number(_req.params.id_domicilio)
              })
            if (!casa){
                _res.send(404)
                return    
            }
            if (_req.body.dueño != null){
                casa.dueño = _req.body.dueño
            }
            if (_req.body.direccion != null){
                casa.direccion = _req.body.direccion
            }
            if (_req.body.consumo != null){
                casa.consumo = _req.body.consumo
            }
            if (_req.body.barrio != null){
                casa.barrio = _req.body.barrio
            }
            if (_req.body.empresa != null){
                if(_req.body.empresa.id_empresa != null)
                {
                    casa.empresa.id_empresa = _req.body.empresa.id_empresa
                }
                if(_req.body.empresa.nombre != null)
                {
                    casa.empresa.nombre = _req.body.empresa.nombre
                }
                if(_req.body.empresa.direccion != null)
                {
                    casa.empresa.direccion = _req.body.empresa.direccion
                }
            }
            if (_req.body.id_domicilio != null){
                casa.id_domicilio = _req.body.id_domicilio
            }
            _res.json(casa);  
});

//Metodos personalizados

routeDomicilio.get("/:barrio/cantidad", (_req , _res) => {
    let cant_apariciones = 0;
    domicilios.forEach(element => {
        if(element.barrio==_req.params.barrio){
            cant_apariciones+=1
        }
    });
    _res.json("El barrio aparecio esta cantidad de veces: "+cant_apariciones)
});