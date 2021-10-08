export {producoes};

class producoes{
    codproducao: number;
    titulo: string;
    genero: string;
    sinopse: string;

    constructor(cf:number, ti:string, ge:string, si:string){
        this.codproducao = cf;
        this.titulo = ti;
        this.genero = ge;
        this.sinopse = si;
    }

}