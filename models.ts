import { prop, getModelForClass } from '@typegoose/typegoose';

class Empresa {
    @prop()
    public nombre?: string;
  
    @prop()
    public direccion?: string;
  } 

export let empresaModel = getModelForClass(Empresa)

class Domicilio{
    @prop()
    public consumo?: string;
}