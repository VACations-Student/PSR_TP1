import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Corte } from '../../Corte';

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
  public cortes?: Array<Corte>;
}

export let domicilioModel = getModelForClass(Domicilio)