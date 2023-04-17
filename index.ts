import { Empresa } from "./Empresa";
import { Corte } from "./Corte";
import { Domicilio } from "./Domicilio";
import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./swagger";
import bodyParser from "body-parser";
import { routeDomicilio } from "./routes/routesDomicilio";
import { routeEmpresas } from "./routes/routesEmpresa";
import { routeCortes } from "./routes/routesCorte";

export let empresas:Array<Empresa> = new Array<Empresa>
export let cortes:Array<Corte> = new Array<Corte>
export let domicilios:Array<Domicilio> = new Array<Domicilio>

let empresax = new Empresa(1,"ejemplo","Bv")

empresas.push(empresax)

const app: express.Application = express();

const port = 2415

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json())

app.listen(port, () => {console.log("La Api esta funcionando")})

app.get('/', (_req , _res) => _res.send('Bienvenido PA'));

app.use("/empresas" , routeEmpresas);

app.use("/cortes" , routeCortes);

app.use("/domicilios" , routeDomicilio);

/*app.get("/empresas", routeEmpresas);

app.get("/empresas/:id_empresa", routeEmpresas);

app.post("/empresas", routeEmpresas);

app.delete("/empresas/:id_empresa", routeEmpresas);

app.put("/empresas/:id_empresa", routeEmpresas);

app.patch("/empresas/:id_empresa", routeEmpresas);

app.get('/cortes', routeCortes);

app.get("/cortes/:id_corte", routeCortes);

app.post("/cortes/", routeCortes);

app.delete("/cortes/:id_corte", routeCortes);

app.put("/cortes/:id_corte", routeCortes);

app.patch("/cortes/:id_corte", routeCortes);

app.get('/domicilios', routeDomicilio);

app.get("/domicilios/:id_domicilio",routeDomicilio);

app.post("/domicilios/", routeDomicilio);

app.delete("/domicilios/:id_domicilio", routeDomicilio);

app.put("/domicilios/:id_domicilio", routeDomicilio);

app.patch("/domicilios/:id_domicilio", routeDomicilio);

//Métodos personalizados

//Duracion en horas
app.get("/cortes/:id_corte/duracion", routeCortes);

//Cantidad de domicilios por barrio
app.get("/domicilios/:barrio/cantidad", routeDomicilio);

//Barrios con mas cortes de luz
app.get("/cortes/:barrio/cantidad_de_cortes", routeCortes);
*/