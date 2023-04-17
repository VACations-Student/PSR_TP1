import { empresaModel } from "./models";

const get = async () => {
    let output = await empresaModel.find()
    console.log(output)
}