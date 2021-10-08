"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perfilLogin_1 = require("./perfilLogin");
var favoritos = /** @class */ (function () {
    function favoritos(cf, cp) {
        this.codFilmes = cf;
        this.codPerfil = cp;
    }
    return favoritos;
}());
var tilson = new perfilLogin_1.perfilLogin(1, "bravior", true);
tilson.getCriarperfil();
