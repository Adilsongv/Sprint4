"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmes = void 0;
var producoes_1 = require("./producoes");
var filmes = /** @class */ (function (_super) {
    __extends(filmes, _super);
    function filmes(cf, ti, ge, si, c, p) {
        var _this = _super.call(this, cf, ti, ge, si) || this;
        _this.continuacao = c;
        _this.partes = p;
        return _this;
    }
    return filmes;
}(producoes_1.producoes));
exports.filmes = filmes;
var series = /** @class */ (function (_super) {
    __extends(series, _super);
    function series(cf, ti, ge, si, e, t) {
        var _this = _super.call(this, cf, ti, ge, si) || this;
        _this.episodios = e;
        _this.temporadas = t;
        return _this;
    }
    return series;
}(producoes_1.producoes));
