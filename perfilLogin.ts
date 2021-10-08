export { perfilLogin };
import { login } from "./login";

class perfilLogin {
    codPerfil: number;
    nickname:string;
    activePerfil:boolean;
    
    constructor(c:number, n:string, a:boolean){
        this.codPerfil = c;
        this.nickname = n;
        this.activePerfil = a;
    }
    getCriarperfil():void{
        console.log(`-------- PerfilCriado --------`);    
        console.log(`Foi criado o perfil ${this.nickname} com sucesso`);    
    }
}


// email numero 1
const Adilson = new login(
    1,
    "tilson2000@hotmail.com",
    "vaimasdemora",
    true
    );
Adilson.BoasVindas();

console.log(Adilson.getTrocaSenha);

Adilson.setTrocaSenha = "dificil mais foi";

console.log(Adilson.getTrocaSenha);

// email numero 2
const Joaquim = new login(
    2,
    "jojamorreu@hotmail.com",
    "vaimasdemora",
    true
    );
    Joaquim.BoasVindas();

console.log(Joaquim.getTrocaSenha);

Joaquim.setTrocaSenha = "dificil mais foi";

console.log(Joaquim.getTrocaSenha);
