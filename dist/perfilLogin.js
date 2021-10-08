"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perfilLogin = void 0;
var login_1 = require("./login");
var perfilLogin = /** @class */ (function () {
    function perfilLogin(c, n, a) {
        this.codPerfil = c;
        this.nickname = n;
        this.activePerfil = a;
    }
    perfilLogin.prototype.getCriarperfil = function () {
        console.log("-------- PerfilCriado --------");
        console.log("Foi criado o perfil " + this.nickname + " com sucesso");
    };
    return perfilLogin;
}());
exports.perfilLogin = perfilLogin;
// email numero 1
var Adilson = new login_1.login(1, "tilson2000@hotmail.com", "vaimasdemora", true);
Adilson.BoasVindas();
console.log(Adilson.getTrocaSenha);
Adilson.setTrocaSenha = "dificil mais foi";
console.log(Adilson.getTrocaSenha);
// email numero 2
var Joaquim = new login_1.login(2, "jojamorreu@hotmail.com", "vaimasdemora", true);
Joaquim.BoasVindas();
console.log(Joaquim.getTrocaSenha);
Joaquim.setTrocaSenha = "dificil mais foi";
console.log(Joaquim.getTrocaSenha);
