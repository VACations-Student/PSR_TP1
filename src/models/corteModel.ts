import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: { collection: 'corte' },
})

class Corte{
    @prop()
    public id_corte!: number;

    @prop()
    public inicio!: Date;
    
    @prop()
    public fin?: Date;

    @prop()
    public barrio!: string;
}
  
export let corteModel = getModelForClass(Corte)