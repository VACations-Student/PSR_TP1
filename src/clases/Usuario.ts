export class Usuario {
    name: string
    password: string
    temporarl_key: string

    constructor(name: string, password: string){
        this.name = name
        this.password = password
        this.temporarl_key = ""
    }    
}