import { perfilLogin } from "./perfilLogin";
import { filmes } from "./filmes";

class favoritos {
    codFilmes:number;
    codPerfil:number;

    constructor(cf:number, cp:number){
        this.codFilmes = cf;
        this.codPerfil = cp;
    }

}

const tilson = new perfilLogin(
    1,
    "bravior",
    true
    );

tilson.getCriarperfil();