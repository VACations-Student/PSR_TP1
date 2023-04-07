import { Empresa } from "./Empresa";
import { Corte } from "./Corte";
import { Domicilio } from "./Domicilio";
import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerConfig } from "./swagger";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerDocument from "./swagger";
import bodyParser from "body-parser";

let empresas:Array<Empresa> = new Array<Empresa>
let cortes:Array<Corte> = new Array<Corte>
let domicilios:Array<Domicilio> = new Array<Domicilio>

const app: express.Application = express();

const port = 2415

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json())

app.listen(port, () => {console.log("La Api esta funcionando")})

app.get('/', (_req , _res) => _res.send('Bienvenido PA'));

app.get("/empresas", (_req , _res) => _res.json(empresas));

app.get("/empresas/:id_empresa", (_req , _res) => {
    _res.json(empresas.find(item => {
                return item.id_empresa == Number(_req.params.id_empresa)
    }));
})

app.post("/empresas", (_req , _res) => {
    const empresa = new Empresa(_req.body.id_empresa, _req.body.nombre, _req.body.direccion)
    empresas.push(empresa)
    _res.json(empresa)
})

app.delete("/empresas/:id_empresa", (_req , _res) => {
    const empresa = empresas.find(item => {
        return item.id_empresa == Number(_req.params.id_empresa)
    })
    if(empresa){
        empresas.splice(empresas.indexOf(empresa),1)
    }
    _res.status(204).send()
})

app.put("/empresas/:id_empresa", (_req,_res) => {
    const compania = empresas.find(item => {
                  return item.id_empresa == Number(_req.params.id_empresa)
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
  })

app.patch("/empresas/:id_empresa", (_req,_res) => {
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
  })

app.get('/cortes', (_req , _res) => _res.json(cortes));

app.get("/cortes/:id_corte", (_req , _res) => {
    _res.json(cortes.find(item => {
                return item.id_corte == Number(_req.params.id_corte)
    }));
})

app.post("/cortes/", (_req , _res) => {
    const corte = new Corte(_req.body.id_corte, _req.body.inicio, _req.body.fin, _req.body.domicilio)
    cortes.push(corte)
    _res.json(corte)
}) 

app.delete("/cortes/:id_corte", (_req , _res) => {
    const corte = cortes.find(item => {
        return item.id_corte == Number(_req.params.id_corte)
    })
    if(corte){
        cortes.splice(cortes.indexOf(corte),1)
    }
    _res.status(204).send()
})

app.put("/cortes/:id_corte", (_req,_res) => {
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
  })

app.patch("/cortes/:id_corte", (_req,_res) => {
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
  })

app.get('/domicilios', (_req , _res) => _res.json(domicilios));

app.get("/domicilios/:id_domicilio", (_req , _res) => {
    _res.json(domicilios.find(item => {
                return item.id_domicilio == Number(_req.params.id_domicilio)
    }));
})

app.post("/domicilios/", (_req , _res) => {
    const domicilio = new Domicilio(_req.body.id_domicilio, _req.body.direccion, _req.body.empresa, _req.body.barrio, _req.body.consumo, _req.body.dueño)
    domicilios.push(domicilio)
    _res.json(domicilio)
}) 

app.delete("/domicilios/:id_domicilio", (_req , _res) => {
    const domicilio = domicilios.find(item => {
        return item.id_domicilio == Number(_req.params.id_domicilio)
    })
    if(domicilio){
        domicilios.splice(domicilios.indexOf(domicilio),1)
    }
    _res.status(204).send()
})

app.put("/domicilios/:id_domicilio", (_req,_res) => {
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

  })
  app.patch("/domicilios/:id_domicilio", (_req,_res) => {
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
  })

  //Métodos personalizados

  //Duracion en horas
  app.get("/cortes/:id_corte/duracion", (_req , _res) => {
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
})

  //Cantidad de domicilios por barrio
  app.get("/domicilios/:barrio/cantidad", (_req , _res) => {
    let cant_apariciones = 0;
    domicilios.forEach(element => {
        if(element.barrio==_req.params.barrio){
            cant_apariciones+=1
        }
    });
    _res.json("El barrio aparecio esta cantidad de veces: "+cant_apariciones)
  })

  //Barrios con mas cortes de luz
  app.get("/cortes/:barrio/cantidad_de_cortes", (_req , _res) => {
    let cant_apariciones = 0;
    cortes.forEach(element => {
        if(element.domicilio.barrio==_req.params.barrio){
            cant_apariciones+=1
        }
    });
    _res.json("Estas son la cantidad de cortes por barrio: "+cant_apariciones)
  })