import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: { collection: 'empresa' },
})

class Empresa {
  @prop()
  public nombre!: string;
  
  @prop()
  public direccion!: string;
} 

export let empresaModel = getModelForClass(Empresa)