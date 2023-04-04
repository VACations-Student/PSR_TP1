import { Empresa } from "./Empresa";
import { Corte } from "./Corte";
import { Domicilio } from "./Domicilio";
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerConfig } from "./swagger";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerDocument from "./swagger"

let empresas:Array<Empresa> = new Array<Empresa>
let cortes:Array<Corte> = new Array<Corte>
let domicilios:Array<Domicilio> = new Array<Domicilio>

let ejemplo = new Empresa(1,"Edenor", "Av. Falsa123")
let ejemplo2 = new Empresa(2,"Edesur", "Av. Verdadera456")
let ejemplo_inicio = new Date(2023, 12, 1, 4, 5, 2);
let ejemplo_fin = new Date(2023, 12, 1, 6, 15, 0);
let ejemplo_domicilio = new Domicilio(6,"Caldero de la barca 2991",ejemplo,"Devoto",86,"Nicolás Vilches");
let ejemplo_domicilio2 = new Domicilio(7,"Caldero de la barca 2993",ejemplo,"Devoto",78,"Nicolá Vilche");
let ejemplo_corte = new Corte(5,ejemplo_inicio,ejemplo_fin,ejemplo_domicilio);
empresas.push(ejemplo)
empresas.push(ejemplo2)
cortes.push(ejemplo_corte)
domicilios.push(ejemplo_domicilio)
domicilios.push(ejemplo_domicilio2)



const app: express.Application = express();

const port = 2414

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

app.listen(port, () => {console.log("Azucar")})

app.get('/', (_req , _res) => _res.send('Bienvenido PA'));

app.get("/empresas", (_req , _res) => _res.json(empresas));

app.get("/empresas/:id_empresa", (_req , _res) => {
    _res.json(empresas.find(item => {
                return item.id_empresa == Number(_req.params.id_empresa)
    }));
})

app.post("/empresas/", (_req , _res) => {
    console.log(_req);
    
    const empresa = new Empresa(_req.body.id_empresa, _req.body.nombre, _req.body.direccion)
    empresas.push(empresa)
    _res.json(empresa)
}) 

app.delete("/empresas/:id_empresa", (_req , _res) => {
    const empresaaa = empresas.find(item => {
        return item.id_empresa == Number(_req.params.id_empresa)
    })
    if(empresaaa){
        delete empresas[empresas.indexOf(empresaaa)]
    }
    _res.status(204).send()
})

app.put("/empresas/:id_empresa", (_req,_res) => {
    const compania = empresas.find(item => {
                  return item.id_empresa == Number(_req.params.id_empresa)
              })
    if (compania){
      compania.id_empresa = _req.body.id_empresa
      compania.nombre = _req.body.nombre
      compania.direccion = _req.body.direccion
    }
    _res.json(compania);   
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
    const corteee = cortes.find(item => {
        return item.id_corte == Number(_req.params.id_corte)
    })
    if(corteee){
        delete cortes[cortes.indexOf(corteee)]
    }
    _res.status(204).send()
})

app.put("/cortes/:id_corte", (_req,_res) => {
    const debaja = cortes.find(item => {
                  return item.id_corte == Number(_req.params.id_corte)
              })
    if (debaja){
      debaja.id_corte = _req.body.id_corte
      debaja.inicio = _req.body.inicio
      debaja.fin = _req.body.fin
      debaja.domicilio = _req.body.domicilio
    }
    _res.json(debaja);   
  })

app.patch("/cortes/:id_corte", (_req,_res) => {
    const debaja = cortes.find(item => {
                  return item.id_corte == Number(_req.params.id_corte)
              })
    if (!debaja){
        _res.send(404)
        return
    }
    if (_req.body.id_corte != null){
        debaja.id_corte = _req.body.id_corte
    }
    if (_req.body.inicio != null){
        debaja.inicio = _req.body.inicio
    }
    if (_req.body.fin != null){
        debaja.fin = _req.body.fin
    }
    if (_req.body.domicilio != null){
        debaja.domicilio = _req.body.domicilio
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
    const domicilio = new Domicilio(_req.body.id_domicilio, _req.body.direccion, _req.body.barrio, _req.body.empresa, _req.body.consumo, _req.body.dueño)
    domicilios.push(domicilio)
    _res.json(domicilio)
}) 

app.delete("/domicilios/:id_domicilio", (_req , _res) => {
    const domiciliooo = domicilios.find(item => {
        return item.id_domicilio == Number(_req.params.id_domicilio)
    })
    if(domiciliooo){
        delete domicilios[domicilios.indexOf(domiciliooo)]
    }
    _res.status(204).send()
})

app.put("/domicilios/:id_domicilio", (_req,_res) => {
    const casa = domicilios.find(item => {
                  return item.id_domicilio == Number(_req.params.id_domicilio)
              })
    if (casa){
      casa.id_domicilio = _req.body.id_domicilio
      casa.direccion = _req.body.direccion
      casa.barrio = _req.body.barrio
      casa.consumo = _req.body.consumo
      casa.dueño = _req.body.dueño
      casa.empresa = _req.body.empresa
    }
    _res.json(casa);   
  })
  app.patch("/domicilios/:id_domicilio", (_req,_res) => {
    const casa = domicilios.find(item => {
                  return item.id_domicilio == Number(_req.params.id_domicilio)
              })
    if (!casa){
        _res.send(404)
        return
    }
    if (_req.body.id_domicilio != null){
        casa.id_domicilio = _req.body.id_domicilio
    }
    if (_req.body.direccion != null){
        casa.direccion = _req.body.direccion
    }
    if (_req.body.barrio != null){
        casa.barrio = _req.body.barrio
    }
    if (_req.body.empresa != null){
        casa.empresa = _req.body.empresa
    }
    if (_req.body.dueño != null){
        casa.dueño = _req.body.dueño
    }
    if (_req.body.consumo != null){
        casa.consumo = _req.body.consumo
    }
    _res.json(casa);   
  })

  //Métodos personalizados

  //Duracion en horas y minutos de los cortes
  app.get("/cortes/:id_corte/duracion", (_req , _res) => {
    const corte = cortes.find(item => {
                return item.id_corte == Number(_req.params.id_corte)
    });
    if(corte){
        let duracion = (corte.fin.getTime() - corte.inicio.getTime())/3600000
        duracion = Number(duracion.toFixed(3))
        _res.json(duracion)
    }
    else{
        _res.status(404).send()
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

  //Borrar la casa con mayor consumo
  app.delete("/domicilios/:barrio/borrar_casa_maxConsumo", (_req , _res) => {
    let consumo_mayor = 0;
domicilios.forEach(element => {
    if (consumo_mayor <= element.consumo) {
        consumo_mayor = element.consumo;
    }
});
const aux = domicilios.find(item => {
    return item.consumo == Number(consumo_mayor);
});
if (aux) {
    delete domicilios[domicilios.indexOf(aux)];
}
_res.json(consumo_mayor);
})

