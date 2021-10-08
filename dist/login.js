"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var login = /** @class */ (function () {
    function login(c, e, p, a) {
        this.codLogin = c;
        this.email = e;
        this.password = p;
        this.active = a;
    }
    login.prototype.BoasVindas = function () {
        console.log("-------- Bem vindo ao XILFTEN --------");
        console.log("Bem vindo " + this.email + ", voce acaba de adentrar ao novo XILFTEN");
    };
    Object.defineProperty(login.prototype, "getTrocaSenha", {
        get: function () {
            console.log("------------ Senha Atual ------------");
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(login.prototype, "setTrocaSenha", {
        set: function (p) {
            this.password = p;
        },
        enumerable: false,
        configurable: true
    });
    return login;
}());
exports.login = login;
