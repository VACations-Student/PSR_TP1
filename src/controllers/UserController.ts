import { usuarioModel } from "../models/usarioModel";
import { Usuario } from "../clases/Usuario";
import * as bcrypt from "bcrypt";
import { TOKEN_SECRET } from "../../jwt";
const jwt = require("jsonwebtoken");

export default{
    sign_in: (usuario:Usuario) =>  {
        return new Promise<any>(async (resolve,reject) => {
            let contraHasheada = await bcrypt.hash(usuario.password,10)
            usuario.password = String(contraHasheada)
            usuarioModel.find({"username": usuario.username}).then((user:Usuario[]) =>{
                if(user[0] != undefined){
                    reject("User alredy created")
                }
                else{
                    usuarioModel.create(usuario).then((user)=>{
                        resolve (user)
                    })
                }
            })
        }).catch((error) => {})
    },
    log_in: (usuario:Usuario) => {
        return new Promise<any>((resolve,reject) =>{ 
            usuarioModel.find({"username": usuario.username}).then(async (user:Usuario[])=>{
                if(await bcrypt.compare(usuario.password,user[0].password)){
                    let documentoInfo = {
                        "nombre" : usuario.username,
                        "contraseña" : usuario.password
                    }
                    let claveSesion = jwt.sign(documentoInfo, TOKEN_SECRET)
                    resolve(claveSesion)
                }
                else{
                    reject("Password don't match")
                }
                
            })
        }).catch((error) => {});
    }
}