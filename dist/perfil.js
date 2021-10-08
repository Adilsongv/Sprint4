"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./login");
var Adilson = new login_1.login(1, "tilson2000@hotmail.com", "vaimasdemora", true);
Adilson.BoasVindas();
console.log(Adilson.getTrocaSenha);
Adilson.setTrocaSenha = "dificil mais foi";
console.log(Adilson.getTrocaSenha);
//classe perfilLogin com povoamento
var perfilLogin = /** @class */ (function () {
    function perfilLogin(c, n, a) {
        this.codPerfil = c;
        this.nickname = n;
        this.activePerfil = a;
    }
    perfilLogin.prototype.getCriarperfil = function () {
        console.log("Foi criado o perfil " + this.nickname + " com sucesso");
    };
    return perfilLogin;
}());
var tilson = new perfilLogin(1, "bravior", true);
tilson.getCriarperfil();
