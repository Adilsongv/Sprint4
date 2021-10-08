import { producoes } from "./producoes";
export{filmes};

class filmes extends producoes{
    continuacao:boolean;
    partes:number;

    constructor(cf:number, ti:string, ge:string, si:string, c:boolean, p:number){
        super(cf, ti,ge, si);
        this.continuacao = c;
        this.partes = p;
    }   
}

class series extends producoes{
    episodios:number;
    temporadas:number;

    constructor(cf:number, ti:string, ge:string, si:string, e:number, t:number){
        super(cf, ti,ge, si);
        this.episodios = e;
        this.temporadas = t;
    }
}