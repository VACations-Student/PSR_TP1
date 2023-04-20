import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./swagger";
import bodyParser from "body-parser";
import { routeDomicilio } from "./routes/routesDomicilio";
import { routeEmpresas } from "./routes/routesEmpresa";
import { routeCortes } from "./routes/routesCorte";
import mongoose from "mongoose";

const app: express.Application = express();

const port = 2414

mongoose
    .set("strictQuery", false)
    .connect('mongodb://localhost:27017/Cortes_de_luz')
    
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json())

app.listen(port, () => {console.log("La Api esta funcionando")})

app.get('/', (_req , _res) => _res.send('Bienvenido PA'));

app.use("/empresas" , routeEmpresas);

app.use("/cortes" , routeCortes);

app.use("/domicilios" , routeDomicilio);