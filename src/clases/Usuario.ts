export class Usuario {
    username: string
    password: string
    temp_key: string

    constructor(username: string, password: string){
        this.username = username
        this.password = password
        this.temp_key = ""
    }    
}