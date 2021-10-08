type catFil = "Filme" | "Serie";

class catFilmes{
    codCategoria:number;
    descricao:catFil;

    constructor(cc:number, de:catFil){
        this.codCategoria = cc;
        this.descricao = de;
    }
}