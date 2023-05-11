import { Router } from "express";
import UserController from "../src/controllers/UserController";

export const routeUsuario = Router();

routeUsuario.post("/signin", (_req,_res) =>{
    UserController.sign_in(_req.body).then((user)=>{
       _res.status(200).send(user)
    })
});
routeUsuario.post("/login", (_req,_res) =>{
    UserController.log_in(_req.body).then((claveSesion)=>{
       _res.status(200).send(claveSesion)
    })
});
