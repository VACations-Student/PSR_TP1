import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: { collection: 'usuario' },
})

class usuario {
  @prop()
  public username!: string;
  
  @prop()
  public password!: string;
} 

export let usuarioModel = getModelForClass(usuario)