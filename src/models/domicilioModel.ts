import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: { collection: 'domicilio' },
  })

class Domicilio{
  @prop()
  public direccion?: string;

  @prop()
  public nombre_empresa?: string;

  @prop()
  public barrio?: string;

  @prop()
  public consumo?: number;

  @prop()
  public dueño?: string;
  
  @prop()
  public id_cortes?: Array<number>;
}

export let domicilioModel = getModelForClass(Domicilio)