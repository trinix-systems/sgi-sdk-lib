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
exports.EntrepriseModel = void 0;
var model_1 = require("@trinix/app-utility/models/model");
var EntrepriseModel = /** @class */ (function (_super) {
    __extends(EntrepriseModel, _super);
    function EntrepriseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntrepriseModel.fromEntity = function (snapshot) {
        var obj = new EntrepriseModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.sigle)
            obj.sigle = snapshot.sigle;
        if (snapshot.rccm)
            obj.rccm = snapshot.rccm;
        if (snapshot.adresse)
            obj.adresse = snapshot.adresse;
        if (snapshot.idNat)
            obj.idNat = snapshot.idNat;
        if (snapshot.numeroImpot)
            obj.numeroImpot = snapshot.numeroImpot;
        if (snapshot.logoPath)
            obj.logoPath = snapshot.logoPath;
        if (snapshot.status != null && snapshot.status != undefined) {
            obj.status = snapshot.status;
        }
        return obj;
    };
    EntrepriseModel.prototype.copy = function () {
        var obj = new EntrepriseModel();
        obj.code = this.code;
        obj.description = this.description;
        obj.adresse = this.adresse;
        obj.sigle = this.sigle;
        obj.rccm = this.rccm;
        obj.idNat = this.idNat;
        obj.numeroImpot = this.numeroImpot;
        obj.status = this.status;
        return obj;
    };
    return EntrepriseModel;
}(model_1.ModelEntity));
exports.EntrepriseModel = EntrepriseModel;
