import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: { collection: 'domicilio' },
})

class Corte{
    @prop()
    public inicio!: Date;
    
    @prop()
    public fin?: Date;
}
  
export let corteModel = getModelForClass(Corte)