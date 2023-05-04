import { usuarioModel } from "../models/usarioModel";
import { Usuario } from "../clases/Usuario";
import * as bcrypt from "bcrypt";

export default{
    sign_in: (usuario:Usuario) => {
        return new Promise<any>((resolve,reject) =>{
            usuarioModel.find({"name": usuario.name,"password":bcrypt.hash(usuario.password,10)}).then((user)=>{
                reject ("usuario ya creado: "+user)
            })
            usuarioModel.find({"name": usuario.name,"password":bcrypt.hash(usuario.password,10)}).then((user)=>{
                resolve(user)
            })
        });
    },
    log_in: (usuario:Usuario) => {
        return new Promise<any>((resolve,reject) =>{
            usuarioModel.find({"nombre": usuario.name, "password": bcrypt.hash(usuario.password,10)}).then((user)=>{
                resolve (user)
            })
        });
    }
}