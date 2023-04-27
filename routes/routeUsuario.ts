import { Router } from "express";
import DB from "../src/controllers/DB";
export const routeUsuario = Router();

routeUsuario.post("/signin", (_req,_res) =>{
    DB.sign_in(_req.body).then((user)=>{
       _res.status(200).send(user)
    })
});
routeUsuario.post("/login", (_req,_res) =>{
    DB.log_in(_req.body).then((user)=>{
       _res.status(200).send(user)
    })
});
