export { login };

class login{
    codLogin: number;
    email:string;
    password:string;
    active:boolean

    constructor(c:number, e:string, p:string,a:boolean){
        this.codLogin = c;
        this.email = e;
        this.password = p;
        this.active = a;
        
    }
    BoasVindas():void{
        console.log(`-------- Bem vindo ao XILFTEN --------`);    
        console.log(`Bem vindo ${this.email}, voce acaba de adentrar ao novo XILFTEN`);    
    }

    get getTrocaSenha(){
            console.log("------------ Senha Atual ------------");
             return this.password;
        }

    set setTrocaSenha(p:string){
            this.password = p;
        }


}