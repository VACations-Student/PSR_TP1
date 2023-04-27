import express, { json } from "express";
import { empresaModel } from "../models/empresaModel";
import { domicilioModel } from "../models/domicilioModel";
import { corteModel } from "../models/corteModel";
import { Empresa } from "../clases/Empresa";
import { Domicilio } from "../clases/Domicilio";
import { usuarioModel } from "../models/usarioModel";

export default {
    //Empresas
    get_todas_empresas:() => {
        return new Promise<any>((resolve, reject)=>{
            empresaModel.find().then((empresas)=>{
                resolve (empresas)
            })
         });
        
    },
    get_empresa: (nombre:string) => {
        return new Promise<any>((resolve, reject) =>{
            empresaModel.find({"nombre": nombre}).then((empresa)=>{
                resolve (empresa)
            })
        });
    },
    post_empresa: (empre:object) => {
        return new Promise<any>((resolve, reject) =>{
            empresaModel.create(empre).then((empresa)=>{
                resolve (empresa)
            })
        });
    },
    delete_empresa: (nombre:String) => {
        return new Promise<any>((resolve, reject) =>{
            empresaModel.findOneAndDelete({"nombre": nombre}).then((empresa)=>{
                resolve (empresa)
            })
        });
    },
    put_empresa: (nombre:String, empre: object) => {
        return new Promise<any>((resolve,reject) =>{
            empresaModel.findOneAndReplace({"nombre": nombre}, empre).then(()=>{
                empresaModel.find({"nombre": nombre}).then((empresa)=>{
                    resolve (empresa)
                })
            })
            
        });
    },
    patch_empresa: (nombre:String, empre: object) => {
        return new Promise<any>((resolve,reject) =>{
            empresaModel.findOneAndUpdate({"nombre": nombre}, empre).then(()=>{
                empresaModel.find({"nombre": nombre}).then((empresa)=>{
                    resolve (empresa)
                })
            })
        });
    },
    //Domicilios
    get_todos_domicilios: () => {
        return new Promise<any>((resolve,reject) =>{
            domicilioModel.find().then((domicilios)=>{
                resolve (domicilios)
            })
        });
    },
    get_domicilio: (dir:string) => {
        return new Promise<any>((resolve,reject) =>{
            domicilioModel.find({"direccion": dir}).then((domicilio)=>{
                resolve (domicilio)
            })
        });
    },
    post_domicilio: (domi:object) => {
        return new Promise<any>((resolve,reject) =>{
            domicilioModel.create(domi).then((domicilio)=>{
                resolve (domicilio)
            })
        });
    },
    delete_domicilio: (dir:string) => {
        return new Promise<any>((resolve,reject) =>{
            domicilioModel.findOneAndDelete({"direccion": dir}).then((domicilio)=>{
                resolve (domicilio)
            })
        });
    },
    put_domicilio: (dir:String, domi: object) => {
        return new Promise<any>((resolve,reject) =>{
            domicilioModel.findOneAndReplace({"direccion": dir},domi).then(()=>{
                domicilioModel.find({"direccion": dir}).then((domicilio)=>{
                    resolve (domicilio)
                })
            })
        });
    },
    patch_domicilio: (dir:String, domi: object) => {
        return new Promise<any>((resolve,reject) =>{
            domicilioModel.findOneAndUpdate({"direccion": dir},domi).then(()=>{
                domicilioModel.find({"direccion": dir}).then((domicilio)=>{
                    resolve (domicilio)
                })
            })
        });
    },
    domicilios_x_barrio: (barrio:string) => {
        return new Promise<any>((resolve,reject) =>{
            let cant_apariciones = 0;
            domicilioModel.find().then((v)=>{
                v.forEach((element: { barrio: string; }) => {
                    if(element.barrio==barrio){
                        cant_apariciones+=1
                    }
                });
                resolve (cant_apariciones)
            })
            
        });
    },
    // Cortes
    get_todos_cortes: () => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.find().then((cortes)=>{
                resolve (cortes)
            })
        });
    },
    get_corte: (id:Number) => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.find({"id_corte": id}).then((corte)=>{
                resolve (corte)
            })
        });
    },
    post_corte: (corte:object) => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.create(corte).then((corte)=>{
                resolve (corte)
            })
        });
    },
    delete_corte: (id: Number) => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.findOneAndDelete({"id_corte": id}).then((corte)=>{
                resolve (corte)
            })
        });
    },
    put_corte: (id: Number, corte: object) => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.findOneAndReplace({"id_corte": id},corte).then(()=>{
                corteModel.find({"id_corte": id}).then((corte)=>{
                    resolve (corte)
                })
            })
        });
    },
    patch_corte: (id: Number, corte: object) => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.findOneAndUpdate({"id_corte": id},corte).then(()=>{
                corteModel.find({"id_corte": id}).then((corte)=>{
                    resolve (corte)
                })
            })
        });
    },
    cortes_x_barrio: (barrio:string) => {
        return new Promise<any>((resolve,reject) =>{
            let cant_apariciones = 0;
            corteModel.find().then((v)=>{
                v.forEach((element: { barrio: string; }) => {
                    if(element.barrio==barrio){
                        cant_apariciones+=1
                    }
                });
                resolve (cant_apariciones)
            })
        });
    },
    duracion_x_corte: (id:Number) => {
        return new Promise<any>((resolve,reject) =>{
            corteModel.find().then((v)=>{
                v.forEach((element: { id_corte: number; inicio: Date; fin: Date;}) => {
                    if(Number(element.id_corte)==id){
                        let duracion = ((new Date(element.fin).getTime()- new Date(element.inicio).getTime())/60000)/60
                    duracion = Number(duracion.toFixed(3))
                    resolve (duracion)
                    }
                })
            });
        })
    },
    sign_in: (usuario:object) => {
        return new Promise<any>((resolve,reject) =>{
            usuarioModel.create(usuario).then((user)=>{
                resolve (user)
            })
        });
    },
    log_in: (usuario:object) => {
        return new Promise<any>((resolve,reject) =>{
            usuarioModel.find({usuario}).then((user)=>{
                resolve (user)
            })
        });
    }
}