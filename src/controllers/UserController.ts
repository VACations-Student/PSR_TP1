import { usuarioModel } from "../models/usarioModel";
import { Usuario } from "../clases/Usuario";
import * as bcrypt from "bcrypt";

export default{
    sign_in: (usuario:Usuario) => {
        return new Promise<any>((resolve,reject) =>{
            
            usuarioModel.create({"name": usuario.username,"password": usuario.password, "temp_key": usuario.temp_key}).then((user)=>{
                reject ("usuario ya creado: "+user)
            })
        });
    },
    log_in: (usuario:Usuario) => {
        return new Promise<any>((resolve,reject) =>{
            usuarioModel.find({"nombre": usuario.username, "password": usuario.password}).then((user)=>{
                resolve (user)
            })
        });
    }
}