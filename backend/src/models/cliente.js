import {Usuario} from './Usuario.js';

export class Cliente extends Usuario {
    nome;
    cpf;
    
    constructor(id, email, senha, nome, cpf) {
        super(id, email, senha);
        this.nome = nome;
        this.cpf = cpf;
    }
    info(){
        console.log("=====================")
        console.log("cliente:" + this.nome);
        console.log("email:" + this.email);
        console.log("=====================")
}
}