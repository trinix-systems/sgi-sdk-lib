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
exports.__esModule = true;
exports.CentreModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var entreprise_model_1 = require("./entreprise.model");
var CentreModel = /** @class */ (function (_super) {
    __extends(CentreModel, _super);
    function CentreModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CentreModel.fromEntity = function (snapshot) {
        var obj = new CentreModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.email)
            obj.email = snapshot.email;
        if (snapshot.adresse)
            obj.adresse = snapshot.adresse;
        if (snapshot.phone)
            obj.phone = snapshot.phone;
        if (snapshot.status != null && snapshot.status != undefined) {
            obj.status = snapshot.status;
        }
        if (snapshot.entreprise)
            obj.entreprise = entreprise_model_1.EntrepriseModel.fromEntity(snapshot.entreprise);
        return obj;
    };
    CentreModel.prototype.copy = function () {
        var obj = new CentreModel();
        obj.code = this.code;
        obj.description = this.description;
        obj.adresse = this.adresse;
        obj.email = this.email;
        obj.entreprise = this.entreprise;
        obj.fkEntreprise = this.fkEntreprise;
        obj.phone = this.phone;
        obj.status = this.status;
        return obj;
    };
    return CentreModel;
}(app_utility_1.ModelEntity));
exports.CentreModel = CentreModel;
