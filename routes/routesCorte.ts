import bodyParser from "body-parser";
import { Corte } from "../Corte";
import { Router } from "express";
import { cortes } from "..";
export const routeCortes = Router();

routeCortes.get('/', (_req , _res) => _res.json(cortes));

routeCortes.get("/:id_corte", (_req , _res) => {
    _res.json(cortes.find(item => {
                return item.id_corte == Number(_req.params.id_corte)
    }));
});

routeCortes.post("/", (_req , _res) => {
    const corte = new Corte(_req.body.id_corte, _req.body.inicio, _req.body.fin, _req.body.domicilio)
    cortes.push(corte)
    _res.json(corte)
});

routeCortes.delete("/:id_corte", (_req , _res) => {
    const corte = cortes.find(item => {
        return item.id_corte == Number(_req.params.id_corte)
    })
    if(corte){
        cortes.splice(cortes.indexOf(corte),1)
    }
    _res.status(204).send()
});

routeCortes.put("/:id_corte", (_req,_res) => {
    const debaja = cortes.find(item => {
                  return item.id_corte == Number(_req.params.id_corte)
              })
            if (!debaja){
                _res.send(404)
                return    
            }
            if(_req.body.id_corte==undefined || _req.body.domicilio==undefined || _req.body.domicilio.id_domicilio==undefined || _req.body.domicilio.dueño==undefined || _req.body.domicilio.consumo==undefined || _req.body.domicilio.barrio==undefined || _req.body.domicilio.direccion==undefined || _req.body.domicilio.empresa==undefined || _req.body.domicilio.empresa.nombre==undefined || _req.body.domicilio.empresa.direccion==undefined || _req.body.domicilio.empresa.id_empresa==undefined || _req.body.fin==undefined || _req.body.inicio==undefined){
                _res.send(404)
                return    
            }
            else{
                debaja.id_corte =  _req.body.id_corte
                debaja.domicilio = _req.body.domicilio
                debaja.fin = new Date(_req.body.fin)
                debaja.inicio = new Date(_req.body.inicio)
            }
            _res.json(debaja); 
            _res.send(200); 
});

routeCortes.patch("/:id_corte", (_req,_res) => {
    const debaja = cortes.find(item => {
                  return item.id_corte == Number(_req.params.id_corte)
              })
            if (!debaja){
                _res.send(404)
                return    
            }
            if (_req.body.fin != null){
                debaja.fin = _req.body.fin
            }
            if (_req.body.inicio != null){
                debaja.inicio = _req.body.inicio
            }
            if (_req.body.domicilio != null){
                if(_req.body.domicilio.id_domicilio != null){
                    debaja.domicilio.id_domicilio  =_req.body.domicilio.id_domicilio
                }
                if(_req.body.domicilio.consumo != null){
                    debaja.domicilio.consumo  =_req.body.domicilio.consumo
                }
                if(_req.body.domicilio.direccion != null){
                    debaja.domicilio.direccion  =_req.body.domicilio.direccion
                }
                if(_req.body.domicilio.dueño != null){
                    debaja.domicilio.dueño  =_req.body.domicilio.dueño
                }
                if(_req.body.domicilio.barrio != null){
                    debaja.domicilio.barrio  =_req.body.domicilio.barrio
                }
                if(_req.body.domicilio.empresa != null){
                    if(_req.body.domicilio.empresa.id_empresa != null){
                        debaja.domicilio.empresa.id_empresa = _req.body.domicilio.empresa.id_empresa
                    }
                    if(_req.body.domicilio.empresa.nombre != null){
                        debaja.domicilio.empresa.nombre = _req.body.domicilio.empresa.nombre
                    }
                    if(_req.body.domicilio.empresa.direccion != null){
                        debaja.domicilio.empresa.direccion = _req.body.domicilio.empresa.direccion
                    }
                }
            }
            if (_req.body.id_corte != null){
                debaja.id_corte = _req.body.id_corte
            }
            _res.json(debaja);   
});

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

routeCortes.get("/:barrio/cantidad_de_cortes", (_req , _res) => {
    let cant_apariciones = 0;
    cortes.forEach(element => {
        if(element.domicilio.barrio==_req.params.barrio){
            cant_apariciones+=1
        }
    });
    _res.json("Estas son la cantidad de cortes por barrio: "+cant_apariciones)
});